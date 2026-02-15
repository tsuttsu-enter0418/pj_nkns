import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  images: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // モーダルが開いている間、背景のスクロールを無効化
  useEffect(() => {
    // 現在のスクロール位置を保存
    const scrollY = window.scrollY;

    // bodyのスクロールを無効化
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflowY = 'scroll';

    // クリーンアップ関数：モーダルを閉じる時にスクロールを復元
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(project.images.length - 1);
    }
  };

  const getCategoryName = (categoryId: string) => {
    const categories: Record<string, string> = {
      'residential': '住宅',
      'commercial': '商業施設',
      'public': '公共施設',
      'industrial': '工場・倉庫'
    };
    return categories[categoryId] || categoryId;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-6rem)]">
          <div className="relative h-64 sm:h-96 bg-gray-100">
            {project.images.length > 0 ? (
              <>
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={project.title} 
                  className="w-full h-full object-contain"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                    >
                      <ChevronRight size={20} />
                    </button>
                    
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <div className="flex space-x-2 bg-black bg-opacity-50 px-3 py-1 rounded-full">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            className={`h-2 w-2 rounded-full ${
                              index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">画像がありません</p>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                {getCategoryName(project.category)}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {project.location}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {project.year}年
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">プロジェクト概要</h3>
            <p className="text-gray-600 mb-6 whitespace-pre-line">{project.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">施工場所</h3>
                <p className="text-gray-600">{project.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">完成年</h3>
                <p className="text-gray-600">{project.year}年</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;