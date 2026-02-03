import Link from "next/link";

export function AppHeader() {
  return (
    <div>
      <header className="bg-green-900 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-white text-2xl font-semibold">
              Simulador
            </a>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  className="text-white hover:text-gray-300"
                  href="/brasileirao"
                >
                  Brasileirão 2026 - Série A
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-300"
                  href="/paulistao"
                >
                  Paulistão 2026 - Série A1
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            {/*<a
              href="#"
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white"
            >
              Get Started
            </a>*/}
          </div>
        </div>
      </header>
    </div>
  );
}
