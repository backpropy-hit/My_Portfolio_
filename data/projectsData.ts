interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'IRC 2026 Rover Vision',
    description: 'Real-time cone detection with YOLOv8 and OpenVINO on a CPU-only NUC, deployed through ROS2. 9th internationally.',
    href: '/blog/irc26-rover-vision',
  },
  {
    title: 'EnviroWealth RAG Pipeline',
    description: 'OCR, chunking and vector search with Tesseract, Docling and Qdrant for BRSR report generation, plus a Streamlit and Gemini chatbot prototype.',
    href: '/blog/envirowealth-rag-pipeline',
  },
  {
    title: 'Drone Image Segmentation',
    description: 'Swin Transformer model that splits aerial photos into 7 classes, served in a Streamlit app.',
    href: '/blog/drone-image-segmentation-swin',
  },
  {
    title: 'Curvature-aware PINN for Airfoils',
    description: 'Preprocessing and a physics-informed network on AirfRANS, with collocation points weighted by airfoil curvature.',
    href: '/blog/pinn-airfoil-airfrans',
  },
  {
    title: 'Gesture-controlled Robot',
    description: 'YOLOv11 gesture recognition driving an ESP32 robot with under 100 ms detection-to-motion latency.',
    href: '/blog/gesture-controlled-robot',
  },
]

export default projectsData
