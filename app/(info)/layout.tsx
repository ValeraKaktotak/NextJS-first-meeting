
export default function InfoLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <span>Info Layout</span>
    <div>{children}</div>
    </>
  )
}
