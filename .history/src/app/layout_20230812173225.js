import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'DW Air Conditioning & Heating Services',
  description: 'Air Conditioning & Heating Services Throughout London & Surrounding Areas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="index-page">{children}</body>
    </html>
  )
}
