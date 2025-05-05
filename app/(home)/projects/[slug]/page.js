export default function ProjectDetail({ params }) {
    const { slug } = params;
  
    // You can fetch data based on the slug here if needed
    return (
      <main>
        <h1>Project: {slug.replace(/-/g, ' ')}</h1>
        <p>Details about {slug.replace(/-/g, ' ')} will be shown here.</p>
      </main>
    );
  }
  