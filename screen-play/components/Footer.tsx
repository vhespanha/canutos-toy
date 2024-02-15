export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 text-center">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        {/* GitHub Profile and Source Code Links */}
        <p className="!text-center hover:scale-110 transition-transform text-balance text-sm leading-loose text-foreground md:text-left">
          Criado por{" "}
          <a
            href="https://github.com/vhespanha"
            target="_blank"
            rel="noreferrer"
            className="font-medium hover:text-primary-foreground underline underline-offset-4"
          >
            Vinicius Hespanha
          </a>
          {" | "} Código fonte:{" "}
          <a
            href="https://github.com/vhespanha/canutos-toy" // Replace with the actual source code link
            target="_blank"
            rel="noreferrer"
            className="font-medium hover:text-primary-foreground underline underline-offset-4"
          >
            GitHub
          </a>
        </p>

        {/* Business Hours */}
        <p className="hover:scale-110 transition-transform text-sm text-foreground">
          Horário de trabalho: Seg-Sex 9am-5pm
        </p>

        {/* Policy Links */}
        <div className="text-sm hover:scale-110 transition-transform text-foreground">
          <a
            href="/privacy-policy"
            className="hover:text-primary-foreground underline underline-offset-4"
          >
            Política de Privacidade
          </a>
          {" | "}
          <a
            href="/cookie-policy"
            className="underline hover:text-primary-foreground underline-offset-4"
          >
            Politica de Cookies
          </a>
          {" | "}
          <a
            href="/terms-conditions"
            className="underline hover:text-primary-foreground underline-offset-4"
          >
            Termos e Condições
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-sm text-foreground hover:scale-110 transition-transform">
          © 2024 Canuto's Toy. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
