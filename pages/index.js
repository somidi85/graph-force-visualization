import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Link href="/basic-node-chart">Basic Node Chart</Link>
      </div>
      <div>
        <Link href="/basic-tree-topology">Basic Tree Topology</Link>
      </div>
    </div>
  );
}
