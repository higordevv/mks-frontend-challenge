import StyledComponentsRegistry from "./lib/registry";
import GlobalStyle from "@app/styles/global";
import "./styles/fonts.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>MKS SISTEMAS</title>
      </head>

      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
