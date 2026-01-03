import React, { useState, useEffect } from 'react';
import { X, Save, Trash2, Plus, AlertCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  images: string[];
}

interface AdminModalProps {
  project: Project | null;
  onClose: () => void;
  onAdd: (project: Project) => void;
  onUpdate: (project: Project) => void;
  onDelete: (id: number) => void;
}

const AdminModal: React.FC<AdminModalProps> = ({ 
  project, 
  onClose, 
  onAdd, 
  onUpdate, 
  onDelete 
}) => {
  const [formData, setFormData] = useState<Omit<Project, 'id'> & { id?: number }>({
    title: '',
    category: 'residential',
    location: '',
    year: new Date().getFullYear().toString(),
    description: '',
    images: []
  });
  
  const [newImageUrl, setNewImageUrl] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData({ ...project });
    }
  }, [project]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleImageAdd = () => {
    if (!newImageUrl.trim()) return;
    
    // Simple URL validation
    try {
      new URL(newImageUrl);
      setFormData({ ...formData, images: [...formData.images, newImageUrl] });
      setNewImageUrl('');
    } catch (e) {
      setErrors({ ...errors, imageUrl: '有効なURLを入力してください' });
    }
  };

  const handleImageRemove = (index: number) => {
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);
    setFormData({ ...formData, images: updatedImages });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'タイトルは必須です';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = '場所は必須です';
    }
    
    if (!formData.year.trim()) {
      newErrors.year = '完成年は必須です';
    } else if (!/^\d{4}$/.test(formData.year)) {
      newErrors.year = '有効な年（例：2023）を入力してください';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = '説明は必須です';
    }
    
    if (formData.images.length === 0) {
      newErrors.images = '少なくとも1つの画像URLを追加してください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    if (formData.id) {
      onUpdate(formData as Project);
    } else {
      onAdd(formData as Project);
    }
  };

  const handleDelete = () => {
    if (formData.id) {
      onDelete(formData.id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" onClick={onClose}>
      <div 
        className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            {project ? 'プロジェクトを編集' : '新規プロジェクト追加'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  プロジェクト名 *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`block w-full rounded-md border ${errors.title ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  カテゴリ *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                >
                  <option value="residential">住宅</option>
                  <option value="commercial">商業施設</option>
                  <option value="public">公共施設</option>
                  <option value="industrial">工場・倉庫</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  場所 *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`block w-full rounded-md border ${errors.location ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  placeholder="例：東京都渋谷区"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  完成年 *
                </label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className={`block w-full rounded-md border ${errors.year ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  placeholder="例：2023"
                />
                {errors.year && (
                  <p className="mt-1 text-sm text-red-600">{errors.year}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  プロジェクト説明 *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className={`block w-full rounded-md border ${errors.description ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  画像 *
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={newImageUrl}
                    onChange={(e) => {
                      setNewImageUrl(e.target.value);
                      if (errors.imageUrl) {
                        setErrors({ ...errors, imageUrl: '' });
                      }
                    }}
                    className={`block w-full rounded-l-md border ${errors.imageUrl ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                    placeholder="画像URLを入力してください"
                  />
                  <button
                    type="button"
                    onClick={handleImageAdd}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    <Plus size={16} className="mr-1" />
                    追加
                  </button>
                </div>
                {errors.imageUrl && (
                  <p className="mt-1 text-sm text-red-600">{errors.imageUrl}</p>
                )}
                {errors.images && (
                  <p className="mt-1 text-sm text-red-600">{errors.images}</p>
                )}
                
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {formData.images.map((url, index) => (
                    <div key={index} className="group relative rounded overflow-hidden bg-gray-100">
                      <img 
                        src={url} 
                        alt={`Image ${index + 1}`} 
                        className="w-full h-32 object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Image+Error';
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleImageRemove(index)}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                      <div className="p-2 text-xs text-gray-500 truncate">
                        {url}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-3 text-sm text-gray-500">
                  <p>※ 画像URLは、Pexelsなどの無料画像サイトから取得できます。</p>
                  <p>※ 例: https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              {project ? (
                <>
                  <button
                    type="button"
                    onClick={() => setShowDeleteConfirm(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <Trash2 size={16} className="mr-2" />
                    削除
                  </button>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    <Save size={16} className="mr-2" />
                    更新
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    キャンセル
                  </button>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    <Plus size={16} className="mr-2" />
                    プロジェクトを追加
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
        
        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div 
              className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center text-red-600 mb-4">
                <AlertCircle size={24} className="mr-2" />
                <h3 className="text-lg font-semibold">プロジェクトを削除しますか？</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                この操作は元に戻せません。「{formData.title}」を削除してもよろしいですか？
              </p>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  キャンセル
                </button>
                
                <button
                  type="button"
                  onClick={handleDelete}
                  className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  削除する
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModal;