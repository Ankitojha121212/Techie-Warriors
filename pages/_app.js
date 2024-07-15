import "@/styles/globals.css";
import Nav from "@/Components/main/Navbar";
import Footer from "@/Components/main/Footer";
import Head from "next/head";



export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="bg-gradient-to-r bg-white  overflow-x-hidden text-gray-950 font-medium" style={{fontFamily : 'sans-serif'}}>
        
        <Nav />

        <Head>
          <title>Floppy Technology - {pageProps.title}</title>
          <meta name="description" content="Best IT comapany in India" />

        
          <meta
            name="description"
            content="Best IT company in Andhra Pradesh"
          />
          <meta
            name="description"
            content="Best IT company in Arunachal Pradesh"
          />
          <meta name="description" content="Best IT company in Assam" />
          <meta name="description" content="Best IT company in Bihar" />
          <meta name="description" content="Best IT company in Chhattisgarh" />
          <meta name="description" content="Best IT company in Goa" />
          <meta name="description" content="Best IT company in Gujarat" />
          <meta name="description" content="Best IT company in Haryana" />
          <meta
            name="description"
            content="Best IT company in Himachal Pradesh"
          />
          <meta name="description" content="Best IT company in Jharkhand" />
          <meta name="description" content="Best IT company in Karnataka" />
          <meta name="description" content="Best IT company in Kerala" />
          <meta
            name="description"
            content="Best IT company in Madhya Pradesh"
          />
          <meta name="description" content="Best IT company in Maharashtra" />
          <meta name="description" content="Best IT company in Manipur" />
          <meta name="description" content="Best IT company in Meghalaya" />
          <meta name="description" content="Best IT company in Mizoram" />
          <meta name="description" content="Best IT company in Nagaland" />
          <meta name="description" content="Best IT company in Odisha" />
          <meta name="description" content="Best IT company in Punjab" />
          <meta name="description" content="Best IT company in Rajasthan" />
          <meta name="description" content="Best IT company in Sikkim" />
          <meta name="description" content="Best IT company in Tamil Nadu" />
          <meta name="description" content="Best IT company in Telangana" />
          <meta name="description" content="Best IT company in Tripura" />
          <meta name="description" content="Best IT company in Uttar Pradesh" />
          <meta name="description" content="Best IT company in Uttarakhand" />
          <meta name="description" content="Best IT company in West Bengal" />
          <meta name="description" content="Web Development Company"/>
          <meta name="description" content="Software Company"/>
          <meta name="description" content="Software Company in India"/>
          

          {/* Structured data (JSON-LD) for better context */}
          <script type="application/ld+json">{`
            {
              "@context": "https://floppytechnology.com",
              "@type": "IT Company",
              "name": "Floppy Technology",
              
            }
          `}</script>
        </Head>

        <Component {...pageProps} title={"Floppy Technology"} />

        {/* Moving div */}
        <div className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full square"></div>

        <Footer />
      </div>
    </>
  );
}
