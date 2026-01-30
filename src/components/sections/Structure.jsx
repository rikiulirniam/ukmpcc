import { useEffect, useRef } from 'react'

export default function Structure() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const scale = window.devicePixelRatio || 1
    
    // Set canvas size
    canvas.width = 1020 * scale
    canvas.height = 620 * scale
    canvas.style.width = '1020px'
    canvas.style.height = '620px'
    ctx.scale(scale, scale)
    
    // Enable smooth text rendering
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Function to draw a node with image
    const drawNode = (x, y, text, imagePath) => {
      // Draw rounded rectangle
      const width = 140
      const height = 80
      const radius = 8
      
      ctx.fillStyle = '#2563eb'
      ctx.beginPath()
      ctx.moveTo(x - width/2 + radius, y - height/2)
      ctx.lineTo(x + width/2 - radius, y - height/2)
      ctx.quadraticCurveTo(x + width/2, y - height/2, x + width/2, y - height/2 + radius)
      ctx.lineTo(x + width/2, y + height/2 - radius)
      ctx.quadraticCurveTo(x + width/2, y + height/2, x + width/2 - radius, y + height/2)
      ctx.lineTo(x - width/2 + radius, y + height/2)
      ctx.quadraticCurveTo(x - width/2, y + height/2, x - width/2, y + height/2 - radius)
      ctx.lineTo(x - width/2, y - height/2 + radius)
      ctx.quadraticCurveTo(x - width/2, y - height/2, x - width/2 + radius, y - height/2)
      ctx.closePath()
      ctx.fill()

      // Draw shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)'
      ctx.shadowBlur = 10
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 4

      // Load and draw image
      const img = new Image()
      img.onload = () => {
        ctx.save()
        ctx.beginPath()
        ctx.arc(x, y - 15, 20, 0, Math.PI * 2)
        ctx.closePath()
        ctx.clip()
        ctx.drawImage(img, x - 20, y - 35, 40, 40)
        ctx.restore()
        
        // Draw white border around image
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(x, y - 15, 20, 0, Math.PI * 2)
        ctx.stroke()
      }
      img.src = imagePath

      // Draw text
      ctx.shadowColor = 'transparent'
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      
      // Enable text antialiasing
      ctx.save()
      ctx.fillText(text, x, y + 20)
      ctx.restore()
    }

    // Function to draw solid line
    const drawLine = (x1, y1, x2, y2) => {
      ctx.strokeStyle = '#1f2937'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }

    // Function to draw dashed line
    const drawDashedLine = (x1, y1, x2, y2) => {
      ctx.strokeStyle = '#1f2937'
      ctx.lineWidth = 2
      ctx.setLineDash([8, 5])
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.setLineDash([])
    }

    // Define positions - centered in 1020px canvas
    const centerX = 510
    const offsetX = 100 // Offset to shift everything right for centering
    
    // Level 1: Administrator
    const adminY = 45
    drawNode(centerX, adminY, 'Administrator', '/assets/members/admin.png')
    drawLine(centerX, adminY + 40, centerX, adminY + 95)

    // Level 2: Sekretaris Umum
    const sekreUmumY = 140
    drawNode(centerX, sekreUmumY, 'Sekretaris Umum', '/assets/members/sekre.png')
    
    // Level 3: Main horizontal line
    const level3Y = 265
    drawLine(centerX, sekreUmumY + 40, centerX, level3Y)
    const horizontalLineLeft = 270
    const horizontalLineRight = 750
    
    // Draw main horizontal line
    drawLine(horizontalLineLeft, level3Y, horizontalLineRight, level3Y)
    
    // Sekretaris - Left
    const sekreX = 290
    const sekreY = 265
    drawLine(sekreX, level3Y, sekreX, sekreY - 40)
    drawNode(sekreX, sekreY, 'Sekretaris', '/assets/members/sekretaris.png')
    
    // Litbang - Right Top with dashed line from middle of vertical line
    const litbangX = 730
    const litbangY = 175
    const midPointY = (sekreUmumY + 40 + level3Y) / 2  // Middle point between Sekretaris Umum and horizontal line
    drawDashedLine(centerX, midPointY, litbangX, litbangY + 30)
    drawNode(litbangX, litbangY, 'Litbang', '/assets/members/litbang.png')
    
    // Bendahara - Right Bottom
    const bendaharaX = 730
    const bendaharaY = 270
    drawNode(bendaharaX, bendaharaY, 'Bendahara', '/assets/members/bendahara.png')
    drawLine(bendaharaX, level3Y, bendaharaX, bendaharaY - 40)

    // Vertical line continues to divisions
    drawLine(centerX, level3Y, centerX, 330)
    
    // Level 4: 5 Divisi horizontal line
    const divisiY = 330
    const divisionHorizLeft = 160
    const divisionHorizRight = 860
    drawLine(divisionHorizLeft, divisiY, divisionHorizRight, divisiY)
    
    const divisiPositions = [
      { x: 180, name: 'Divisi Humas', img: '/assets/members/humas.png' },
      { x: 330, name: 'Divisi KRT', img: '/assets/members/krt.png', hasDept: true },
      { x: 480, name: 'Divisi HRD', img: '/assets/members/hrd.png' },
      { x: 630, name: 'Divisi Redaksi', img: '/assets/members/redaksi.png' },
      { x: 790, name: 'Divisi Workshop', img: '/assets/members/workshop.png', hasDept: true }
    ]

    divisiPositions.forEach(divisi => {
      // Vertical line from horizontal to division node
      drawLine(divisi.x, divisiY, divisi.x, divisiY + 40)
      drawNode(divisi.x, divisiY + 80, divisi.name, divisi.img)

      // Draw departments if applicable
      if (divisi.hasDept) {
        // Vertical line from division to department horizontal line
        drawLine(divisi.x, divisiY + 120, divisi.x, divisiY + 135)
        
        if (divisi.name === 'Divisi KRT') {
          // KRT Departments horizontal line
          const krtDeptY = 465
          const krtLeft = 230
          const krtRight = 430
          drawLine(krtLeft, krtDeptY, krtRight, krtDeptY)
          
          // Dept. Danus
          drawLine(250, krtDeptY, 250, krtDeptY + 40)
          drawNode(250, krtDeptY + 80, 'Dept. Danus', '/assets/members/danus.png')
          
          // Dept. Maintenance
          drawLine(410, krtDeptY, 410, krtDeptY + 40)
          drawNode(410, krtDeptY + 80, 'Dept. Maintenance', '/assets/members/maintenance.png')
          
        } else if (divisi.name === 'Divisi Workshop') {
          // Workshop Departments horizontal line
          const workshopDeptY = 465
          const workshopLeft = 620
          const workshopRight = 960
          drawLine(workshopLeft, workshopDeptY, workshopRight, workshopDeptY)
          
          // Dept. Network
          drawLine(640, workshopDeptY, 640, workshopDeptY + 40)
          drawNode(640, workshopDeptY + 80, 'Dept. Network', '/assets/members/network.png')
          
          // Dept. Software
          drawLine(790, workshopDeptY, 790, workshopDeptY + 40)
          drawNode(790, workshopDeptY + 80, 'Dept. Software', '/assets/members/software.png')
          
          // Dept. Multimedia
          drawLine(940, workshopDeptY, 940, workshopDeptY + 40)
          drawNode(940, workshopDeptY + 80, 'Dept. Multimedia', '/assets/members/multimedia.png')
        }
      }
    })
  }, [])

  return (
    <section id="struktur" className="overflow-x-auto py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Struktur Organisasi
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Tim pengurus yang berdedikasi untuk memajukan UKM Polytechnic Computer Club
          </p>
        </div>

        <div className="flex justify-center">
          <canvas
            ref={canvasRef}
            className="max-w-full"
            style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
          />
        </div>
      </div>
    </section>
  )
}
