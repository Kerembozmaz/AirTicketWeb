import Image from '../images/plane.jpg';

export default function Home() {
  console.log('====================================');
  console.log(Image);
  console.log('====================================');
  return (
    <main className="container bg-transparent">
    <div className='w-full h-[85vh] bg-cover '  style={{backgroundImage : `url(${Image.src})`} }>
    </div>
      
    
    </main>
  );
}
