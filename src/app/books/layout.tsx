
export default function BooksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
			<div className="flex m-auto w-2/3 justify-between items-start 0 booksLayout">
				{children}
			</div>
		</main>
  )
}
