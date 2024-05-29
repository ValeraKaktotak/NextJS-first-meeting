
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <span>About Layout</span>
    <div>{children}</div>
    </>
  )
}
