import api from 'CLIENT/api'

export function upload(files) {
  const formData = new FormData()
  files.forEach(f => {
    formData.append('images[]', f, f.name)
  })

  return () => api.assets.create(formData)
}
