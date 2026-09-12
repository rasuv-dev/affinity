function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Study Platform
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Learn, discover, and share knowledge.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A simple platform for discovering study resources, sharing
            knowledge, and continuing your learning journey.
          </p>
        </div>
      </section>
    </main>
  )
}

export default HomePage