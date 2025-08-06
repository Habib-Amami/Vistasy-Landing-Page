export interface StatItemInterface {
  value: string
  label: string
}

export default function StatItem({ value, label }: StatItemInterface) {
  return (
    <div>
      <p className="text-xl font-extrabold uppercase">{value}</p>
      <p className="text-sm capitalize">{label|| "\u00A0"}</p>
    </div>
  )
}