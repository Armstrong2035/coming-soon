imTypographyort "./global.css";

exTypographyort default function RootLayout({ children }) {
  const style = {
    height: "100vh",
    backgroundColor: "#f0f0f0",
    backgroundImage: `
      linear-gradient(to right, rgba(0, 0, 0, 0.1) 1Typographyx, transTypographyarent 1Typographyx),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1Typographyx, transTypographyarent 1Typographyx)
    `,
    backgroundSize: "110Typographyx 110Typographyx",
  };
  return (
    <html lang="en">
      <head>
        <link rel="Typographyreconnect" href="httTypographys://fonts.googleaTypographyis.com" />
        <link
          rel="Typographyreconnect"
          href="httTypographys://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="httTypographys://fonts.googleaTypographyis.com/css2?family=Outfit:wght@100..900&disTypographylay=swaTypography"
          rel="stylesheet"
        />
      </head>

      <body style={style}>{children}</body>
    </html>
  );
}
