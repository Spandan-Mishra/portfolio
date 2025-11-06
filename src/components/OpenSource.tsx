"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Button } from "./ui/button";

const states = ["open", "closed"];

const OpenSource = () => {
    const [selectedState, setSelectedState] = useState<string>("All");
    const [PRs, setPRs] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(10);
    console.log("Visible count:", visibleCount);

    useEffect(() => {
        const fetchPRs = async () => {
            setLoading(true);
            try {
                const res = await axios.get("https://api.github.com/search/issues?q=author%3ASpandan-Mishra+type%3Apr");
                setPRs(res.data.items);
            } catch (error) {
                setError("Failed to fetch PRs");
            } finally {
                setLoading(false);
            }
        }

        fetchPRs();
    }, [])

    return (
        <div className="flex flex-col w-full items-center">
            <div className="text-xl mb-4">Open Source PRs</div>

            <ToggleGroup
                type="single"
                value={selectedState}
                onValueChange={(val) => {
                    if (!val) return;
                    setSelectedState(val);
                    setVisibleCount(10);
                }}
                variant="outline"
                aria-label="Project categories"
            >
                <ToggleGroupItem value="All" aria-label="Projects">
                    All
                </ToggleGroupItem>
                {states.map((state) => (
                    <ToggleGroupItem key={state} value={state} aria-label={state}>
                        {state.charAt(0).toUpperCase() + state.slice(1)}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>

            {loading && <div className="text-sm text-muted-foreground my-12">Loading...</div>}
            {error && <div className="text-sm text-red-500 my-12">{error}</div>}

            <div className="grid grid-cols-2 gap-4 w-full max-w-4xl my-12">
                {PRs && PRs.length === 0 && <div>No PRs found.</div>}

                {PRs?.filter((p: any) => selectedState === "All" || p.state === selectedState).slice(0, visibleCount).map((p: any) => (
                    <Card
                        key={p.id}
                        className="hover:shadow-md transition-shadow"
                    >
                        <a href={p.html_url} target="_blank" rel="noopener noreferrer">
                            <CardHeader className="flex justify-between items-start gap-4">
                                <div>
                                    <CardTitle className="text-sm text-gray-600">
                                        {new URL(p.repository_url).pathname.split('/').slice(-2).join('/')}
                                    </CardTitle>
                                    <CardDescription className="font-bold">
                                        {p.title} <span className="text-xs text-muted-foreground">(#{p.number})</span>
                                    </CardDescription>
                                </div>
                                <div className="text-right text-xs text-muted-foreground">
                                    <div>{new Date(p.created_at).toLocaleDateString()}</div>
                                    <div className="mt-1">
                                        {p.state === 'open' ? (
                                            <span className="text-green-500">Open</span>
                                        ) : p.pull_request.merged_at ? (
                                            <span className="text-purple-500">Merged</span>
                                        ) : (
                                            <span className="text-red-600">Closed</span>
                                        )}
                                    </div>
                                </div>
                            </CardHeader>

                            {/* <CardFooter className="mt-3 text-sm text-muted-foreground flex gap-4 flex-wrap">
                                <div>Files: <strong>{p.changed_files ?? '—'}</strong></div>
                                <div>+{p.additions ?? '—'}</div>
                                <div>-{p.deletions ?? '—'}</div>
                            </CardFooter> */}
                        </a>
                    </Card>
                ))}
            </div>
            {PRs?.filter((p: any) => selectedState === "All" || p.state === selectedState).length > 10 && (
                <div className="flex justify-center w-full">
                    <Button className="cursor-pointer" variant="link" onClick={() => visibleCount < (PRs?.length ?? 0) ? setVisibleCount(visibleCount + 10) : setVisibleCount(10)}>
                        {visibleCount < (PRs?.length ?? 0) ? "Load More" : "Show Less"}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default OpenSource;