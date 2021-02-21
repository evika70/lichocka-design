import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight   mb-10 lg:mb-4 ">
            Powered by Next.js.
          </h3>
          <p>&copy; 2021 by Ewelina Lichocka.</p>
        </div>
      </Container>
    </footer>
  );
}
