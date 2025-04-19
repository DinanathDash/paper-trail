
import Breadcrumbs from "@/components/Breadcrumbs";

const AboutPage = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" }
  ];

  return (
    <div className="page-container">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="page-title">About PaperTrail</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-paper-800 mb-4">Project Overview</h2>
        <p className="text-paper-600 mb-4">
          PaperTrail is a digital archive designed to provide B.Tech CSE students easy access to assignments organized by semester and subject. Unlike other platforms that redirect to external sites, PaperTrail hosts all assignments directly, allowing for immediate viewing and downloading.
        </p>
        
        <h2 className="text-xl font-semibold text-paper-800 mt-6 mb-4">Why PaperTrail?</h2>
        <p className="text-paper-600 mb-4">
          As computer science students ourselves, we understand the frustration of searching through multiple repositories and platforms to find assignment references. PaperTrail was built to solve this problem by creating a centralized, organized library of assignments that's both accessible and user-friendly.
        </p>
        
        <h2 className="text-xl font-semibold text-paper-800 mt-6 mb-4">Our Mission</h2>
        <p className="text-paper-600 mb-4">
          Our mission is to support the academic journey of B.Tech CSE students by providing a comprehensive resource that enhances learning, encourages collaboration, and simplifies access to educational materials.
        </p>
        
        <h2 className="text-xl font-semibold text-paper-800 mt-6 mb-4">Future Plans</h2>
        <p className="text-paper-600">
          We're continuously working to expand our collection of assignments and improve the platform. Future updates will include additional resources like lecture notes, reference materials, and tools to help students excel in their studies.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
