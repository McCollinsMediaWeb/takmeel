import HeroBanner from '@/components/FirstProjectItem/HeroBanner'

export default function page() {
  return (
    <div>
         <HeroBanner/>
          <div style={{ height: '200vh', backgroundColor: '#ccc' }}>
        <h2 style={{ marginTop: '100vh', textAlign: 'center' }}>
          After Banner Content
        </h2>
      </div>
    </div>
  )
}
