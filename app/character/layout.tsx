/* character list */

export default function CharacterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <a>
          <button>&lt;</button>
        </a>

        {/* TODO: change to tab component */}
        <ul>
          <li>
            <a>
              <button>About</button>
            </a>
          </li>
          <li>
            <a>
              <button>Get</button>
            </a>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
