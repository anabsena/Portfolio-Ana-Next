// app/login/layout.jsx
export const metadata = {
  title: "Auth",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>
}
