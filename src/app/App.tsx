import { motion } from 'motion/react';
import { ConceptNode } from './components/ConceptNode';
import { CurvedArrow } from './components/CurvedArrow';
import { StepNode } from './components/StepNode';
import { AlertTriangle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] overflow-x-auto">
      <div className="relative min-w-[1400px] min-h-screen pb-16 p-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            Criptografía Clásica: Método de Hill
          </h1>
          <p className="text-white/60 text-sm">
            Mapa conceptual interactivo · Nivel universitario
          </p>
        </motion.div>

        {/* SVG for arrows */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="white" opacity="0.6" />
            </marker>
          </defs>

          {/* Arrows from center to main branches */}
          <CurvedArrow
            start={{ x: 610, y: 235 }}
            end={{ x: 400, y: 180 }}
            color="#00C2FF"
            label="define →"
            delay={0.2}
          />
          <CurvedArrow
            start={{ x: 555, y: 280 }}
            end={{ x: 200, y: 350 }}
            color="#00E5A0"
            label="requiere →"
            delay={0.3}
          />
          <CurvedArrow
            start={{ x: 620, y: 345 }}
            end={{ x: 450, y: 550 }}
            color="#FFB547"
            label="se cifra con →"
            delay={0.4}
          />
          <CurvedArrow
            start={{ x: 845, y: 300 }}
            end={{ x: 1020, y: 480 }}
            color="#00E5A0"
            label="se descifra con →"
            delay={0.5}
          />
          <CurvedArrow
            start={{ x: 820, y: 235 }}
            end={{ x: 1050, y: 150 }}
            color="#FFB547"
            label="condición →"
            delay={0.6}
          />
          <CurvedArrow
            start={{ x: 780, y: 345 }}
            end={{ x: 950, y: 780 }}
            color="#00C2FF"
            label="análisis →"
            delay={0.7}
          />
        </svg>

        {/* Content layer */}
        <div className="relative" style={{ zIndex: 2 }}>
          {/* Central Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute"
            style={{ left: '50%', top: '300px', transform: 'translate(-50%, -50%)' }}
          >
            <ConceptNode color="cyan" glow className="w-[300px]">
              <h2 className="text-3xl font-bold text-white text-center mb-2">
                Método de Hill
              </h2>
              <p className="text-[#00C2FF] text-center text-sm">
                Cifrado por Matrices · Criptografía Clásica
              </p>
            </ConceptNode>
          </motion.div>

          {/* Branch 1: ¿Qué es? (Top Left) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute"
            style={{ left: '10px', top: '-30px', width: '340px' }}
          >
            <h3 className="text-[#00C2FF] font-bold text-lg mb-3">¿Qué es?</h3>
            <ConceptNode color="cyan">
              <p className="text-white text-sm leading-relaxed">
                Sistema de cifrado que transforma bloques de letras usando{' '}
                <span className="text-[#00C2FF] font-semibold">multiplicación de matrices</span>{' '}
                y <span className="text-[#00C2FF] font-semibold">aritmética modular</span> (mod 26)
              </p>
            </ConceptNode>
          </motion.div>

          {/* Branch 2: Ingredientes clave (Left) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute"
            style={{ left: '30px', top: '280px', width: '340px' }}
          >
            <h3 className="text-[#00E5A0] font-bold text-lg mb-3">Ingredientes clave</h3>
            <ConceptNode color="green" className="mb-3">
              <p className="text-white font-semibold text-sm mb-3">Elementos necesarios:</p>
            </ConceptNode>
            
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-[#0D1B2A]/60 border border-[#00E5A0]/30 rounded-lg p-3"
              >
                <p className="text-white text-sm">• Matriz clave <span className="text-[#00E5A0] font-mono">K (n×n)</span></p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-[#0D1B2A]/60 border border-[#00E5A0]/30 rounded-lg p-3"
              >
                <p className="text-white text-sm">• Alfabeto convertido a números:<br/>
                  <span className="text-[#00E5A0] font-mono">A=0 ... Z=25</span>
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-[#0D1B2A]/60 border border-[#00E5A0]/30 rounded-lg p-3"
              >
                <p className="text-white text-sm">• Aritmética <span className="text-[#00E5A0] font-mono">módulo 26</span></p>
              </motion.div>
            </div>
          </motion.div>

          {/* Branch 3: Proceso de Cifrado (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute"
            style={{ left: '80px', top: '620px', width: '380px' }}
          >
            <h3 className="text-[#FFB547] font-bold text-lg mb-3">¿Cómo se cifra?</h3>
            <div className="space-y-2">
              <StepNode number="①" text="Escribir el mensaje en texto plano" color="#FFB547" delay={0.7} />
              <StepNode number="②" text="Convertir cada letra a su número" color="#FFB547" delay={0.75} />
              <StepNode number="③" text="Agrupar en bloques de n letras" color="#FFB547" delay={0.8} />
              <StepNode number="④" text="Multiplicar: C = K × P" color="#FFB547" delay={0.85} />
              <StepNode number="⑤" text="Aplicar mod 26 al resultado" color="#FFB547" delay={0.9} />
              <StepNode number="⑥" text="Convertir números a letras → Mensaje cifrado" color="#FFB547" delay={0.95} />
            </div>
          </motion.div>

          {/* Example Box (Bottom Left - Sticky Note Style) */}
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: -3 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ delay: 1.0 }}
            className="absolute bg-[#FFB547] rounded-lg shadow-xl p-4"
            style={{ left: '120px', top: '1040px', width: '280px' }}
          >
            <p className="text-[#0D1B2A] font-bold text-sm mb-2">📌 Ejemplo:</p>
            <p className="text-[#0D1B2A] text-sm font-mono">
              HELP → HIAT
            </p>
            <p className="text-[#0D1B2A] text-xs mt-1">
              usando K = [[3,3],[2,5]]
            </p>
          </motion.div>

          {/* Branch 4: Proceso de Descifrado (Right) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute"
            style={{ left: '1000px', top: '420px', width: '360px' }}
          >
            <h3 className="text-[#00E5A0] font-bold text-lg mb-3">¿Cómo se descifra?</h3>
            <div className="space-y-2">
              <StepNode number="①" text="Calcular la matriz inversa K⁻¹ (mod 26)" color="#00E5A0" delay={0.8} />
              <StepNode number="②" text="Aplicar: P = K⁻¹ × C" color="#00E5A0" delay={0.85} />
              <StepNode number="③" text="Aplicar mod 26" color="#00E5A0" delay={0.9} />
              <StepNode number="④" text="Convertir números a letras → Mensaje original recuperado" color="#00E5A0" delay={0.95} />
            </div>
          </motion.div>

          {/* Branch 5: Condición obligatoria (Top Right) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute"
            style={{ left: '1000px', top: '60px', width: '360px' }}
          >
            <ConceptNode color="amber" warning>
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="text-[#FFB547] flex-shrink-0" size={24} />
                <h3 className="text-[#FFB547] font-bold text-lg">Condición obligatoria</h3>
              </div>
              <p className="text-white text-sm mb-3">La matriz K solo es válida si:</p>
              <div className="bg-[#0D1B2A]/80 rounded-lg p-3 mb-3 space-y-2">
                <p className="text-white font-mono text-sm">• det(K) ≠ 0</p>
                <p className="text-white font-mono text-sm">• mcd(det(K), 26) = 1</p>
              </div>
              <p className="text-white/70 text-xs italic">
                Sin esto, no existe matriz inversa y el cifrado no puede revertirse
              </p>
            </ConceptNode>
          </motion.div>

          {/* Branch 6: Fortaleza y Limitación (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute"
            style={{ left: '900px', top: '720px', width: '480px' }}
          >
            <h3 className="text-white font-bold text-lg mb-3">Fortaleza vs Limitación</h3>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-1"
              >
                <ConceptNode color="green">
                  <div className="flex items-start gap-2">
                    <span className="text-[#00E5A0] text-2xl">✓</span>
                    <p className="text-white text-sm leading-relaxed">
                      Oculta la frecuencia de letras individuales
                    </p>
                  </div>
                </ConceptNode>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-1"
              >
                <ConceptNode color="red">
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF6B6B] text-2xl">✗</span>
                    <p className="text-white text-sm leading-relaxed">
                      Vulnerable si se conocen pares de texto plano y cifrado
                    </p>
                  </div>
                </ConceptNode>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
