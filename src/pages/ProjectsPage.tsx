import React, { useState, useEffect } from "react";
import { Filter, Building } from "lucide-react";
import ProjectModal from "../components/ProjectModal";

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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulated projects data (in a real app this would come from a database)
  const [projects, setProjects] = useState<Project[]>([]);

  // 日付フォーマット関数
  const formatDate = (dateStr: string) => {
    if (!dateStr) return dateStr;

    // YYYY/MM/DD または YYYY-MM-DD 形式の場合
    const datePattern = /^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/;
    const match = dateStr.match(datePattern);

    if (match) {
      const [, year, month, day] = match;
      return `${year}年${month.padStart(2, '0')}月${day.padStart(2, '0')}日`;
    }

    // フォーマットが一致しない場合は、そのまま返す
    return dateStr;
  };
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

  // カテゴリーを動的に生成（カンマ区切りに対応）
  const allCategories = projects.flatMap((p) =>
    p.category ? p.category.split(',').map(cat => cat.trim()) : []
  );
  const uniqueCategories = Array.from(new Set(allCategories));
  const categories = [{ id: "all", name: "すべて" }, ...uniqueCategories.map((cat) => ({ id: cat, name: cat }))];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    // プロジェクトのカテゴリーをカンマ区切りで分割し、選択されたカテゴリーが含まれるかチェック
    const projectCategories = project.category ? project.category.split(',').map(cat => cat.trim()) : [];
    return projectCategories.includes(selectedCategory);
  });

  const openProjectModal = (project: Project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg" alt="Structural design blueprints" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">設計実績</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            私たちが手掛けた様々なプロジェクトをご紹介します。
            <br className="hidden md:block" />
            住宅から商業施設、公共建築物まで、多様な建築実績があります。
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6">
          {/* Category Filters */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {categories.map((category) => (
                <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.id ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  <Filter size={18} />
                  {category.name}
                </button>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="text-sm text-gray-600">{filteredProjects.length}件の実績が見つかりました</div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">実績を取得中...</p>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  {/* プロジェクト画像 */}
                  {project.images.length > 0 && (
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">{formatDate(project.year)}</span>
                    </div>

                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.category && project.category.split(',').map((cat, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {cat.trim()}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 mb-3 flex items-center">
                      <Building size={16} className="mr-1 text-gray-400" />
                      {project.location}
                    </p>

                    <p className="text-gray-600 mb-4 whitespace-pre-line flex-grow">{project.description}</p>

                    {project.images.length > 0 && (
                      <button onClick={() => openProjectModal(project)} className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors mt-auto">
                        <Building size={16} />
                        詳細・画像を見る ({project.images.length}枚)
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">該当する実績が見つかりませんでした</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {isModalOpen && currentProject && <ProjectModal project={currentProject} onClose={closeProjectModal} />}
    </>
  );
};

export default ProjectsPage;
