import React, { useState, useEffect } from "react";
import { Search, Filter, Building, Home, Store, Warehouse, ChevronRight, Plus, X } from "lucide-react";
import ProjectModal from "../components/ProjectModal";
import AdminModal from "../components/AdminModal";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  images: string[];
}

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // ローディング状態

  // Simulated projects data (in a real app this would come from a database)
  const [projects, setProjects] = useState<Project[]>([]);
  // プロジェクトデータを非同期で取得する関数
  const fetchProject = async (): Promise<Project[]> => {
    const res = await fetch("/project.json?v=1.0");
    if (!res.ok) {
      throw new Error("だめでした");
    }
    const decoder = new TextDecoder("utf-16le");
    const data = await decoder.decode(await res.arrayBuffer());
    const projectsData = JSON.parse(data);
    return projectsData;
  };

  // useEffect内で最初にデータ取得を行い、その後状態更新を行う
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProject(); // プロジェクトデータを取得
        setProjects(data); // データをstateにセット
      } catch (error) {
        console.error("Error fetching projects:", error); // エラーハンドリング
      } finally {
        setIsLoading(false); // ローディング状態を解除
      }
    };

    loadProjects(); // データの取得を最初に実行
  }, []); // 空の依存配列で、コンポーネントの初回レンダリング時に一度だけ実行される

  const categories = [
    { id: "all", name: "すべて", icon: <Filter size={18} /> },
    { id: "residential", name: "住宅", icon: <Home size={18} /> },
    { id: "commercial", name: "商業施設", icon: <Store size={18} /> },
    { id: "public", name: "公共施設", icon: <Building size={18} /> },
    { id: "industrial", name: "工場・倉庫", icon: <Warehouse size={18} /> },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase()) || project.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const openProjectModal = (project: Project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const openAdminModal = () => {
    setIsAdminModalOpen(true);
  };

  const closeAdminModal = () => {
    setIsAdminModalOpen(false);
  };

  const handleAddProject = (newProject: Project) => {
    // Generate a new ID (in a real app this would be handled by the backend)
    const newId = Math.max(...projects.map((p) => p.id)) + 1;
    const projectWithId = { ...newProject, id: newId };
    setProjects([...projects, projectWithId]);
    closeAdminModal();
  };

  const handleUpdateProject = (updatedProject: Project) => {
    setProjects(projects.map((p) => (p.id === updatedProject.id ? updatedProject : p)));
    closeAdminModal();
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
    closeAdminModal();
  };

  const editProject = (project: Project) => {
    setCurrentProject(project);
    setIsAdminModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0 h-2/3">
          <img src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg" alt="Construction projects" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">施工実績</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            私たちが手掛けた様々なプロジェクトをご紹介します。
            <br className="hidden md:block" />
            住宅から商業施設、公共建築物まで、多様な建築実績があります。
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => openProjectModal(project)}>
                  <div className="h-48 overflow-hidden">
                    <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{project.year}</span>
                    </div>
                    <p className="text-gray-500 mb-3">{project.location}</p>
                    <p className="text-gray-600 line-clamp-2 mb-4">{project.description}</p>
                    <div className="flex items-center text-orange-500 font-medium">
                      詳細を見る <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">実績を取得中</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {isModalOpen && currentProject && <ProjectModal project={currentProject} onClose={closeProjectModal} onEdit={editProject} />}

      {/* Admin Modal */}
      {isAdminModalOpen && <AdminModal project={currentProject} onClose={closeAdminModal} onAdd={handleAddProject} onUpdate={handleUpdateProject} onDelete={handleDeleteProject} />}
    </>
  );
};

export default ProjectsPage;
