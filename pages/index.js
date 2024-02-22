import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Link href="/basic-node-chart">Basic Node Chart</Link>
    </div>
  );
}
