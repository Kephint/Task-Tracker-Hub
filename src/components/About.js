import { FaArrowRight } from "react-icons/fa"

const About = () => {
  return (
    <div className="about-container">
      <p>
        Task Tracker adalah aplikasi sederhana namun efektif untuk mengelola tugas-tugas Anda.
        Dengan Task Tracker, Anda dapat:
      </p>
      <ul className="feature-list">
        <li><FaArrowRight className="arrow-icon" /> Menambahkan tugas baru dengan mudah</li>
        <li><FaArrowRight className="arrow-icon" /> Menghapus tugas yang sudah selesai</li>
        <li><FaArrowRight className="arrow-icon" /> Melihat daftar tugas Anda secara terorganisir</li>
      </ul>
      <p>
        Aplikasi ini dirancang untuk membantu Anda tetap teratur dan produktif dalam mengelola tugas sehari-hari.
      </p>
      <h4>Version 1.0.0</h4>
    </div>
  )
}

export default About
