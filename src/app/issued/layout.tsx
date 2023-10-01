
export default function IssuedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
			<div className="flex m-auto w-2/3 justify-between items-start 0 issuedLayout">
				{children}
			</div>
		</main>
  )
}
