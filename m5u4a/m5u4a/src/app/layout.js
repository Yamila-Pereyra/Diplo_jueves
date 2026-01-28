
import "./globals.css";
import Nav from "./components/nav";

export const metadata = {
  title: "Code Work Digital",
  description: "Soluciones web que impulsan tu negocio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >

    <header>
          <div>
            <img src="././Imagenes/CodeWork-logo.png" width="100" alt="logo" />
            <h1>Code Work Digital</h1>
            <h4>Soluciones web que impulsan tu negocio</h4>
          </div>
        </header>  

        <Nav/>      
        {children}
        <footer>
          <p>© 2025 CodeWork Digital — Todos los derechos reservados.</p>
        </footer>


       
      </body>
    </html>
  );
}
