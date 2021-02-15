const flatSymbol = '♭'
const notes = [
  'A',
  'A#',
  'A♭',
  'B',
  'B♭',
  'C',
  'C#',
  'D',
  'D#',
  'D♭',
  'E',
  'E♭',
  'F',
  'F#',
  'G',
  'G#',
  'G♭'
]
const scales = [
  { name: 'major (ionian)', intervals: 'R-T-T-S-T-T-T-S' },
  { name: 'dorian', intervals: 'R-T-S-T-T-T-S-T' },
  { name: 'phrygian', intervals: 'R-S-T-T-S-T-T-T' },
  { name: 'lydian', intervals: 'R-T-T-T-S-T-T-S' },
  { name: 'mixolydian', intervals: 'R-T-T-S-T-T-S-T' },
  { name: 'natural minor (aeolian)', intervals: 'R-T-S-T-T-S-T-T' },
  { name: 'locrian', intervals: 'R-S-T-T-S-T-T-T' },
  { name: 'harmonic minor', intervals: 'R-T-S-T-T-S-T+S-S' },
  { name: 'chromatic', intervals: 'R-S-S-S-S-S-S-S-S-S-S-S-S' },
  { name: 'whole tone', intervals: 'R-T-T-T-T-T-T' }
]

// document selectors
const scaleNameContainer = document.getElementById("scale")
const intervalsContainer = document.getElementById("intervals")
const startParagraphElement = document.getElementById("main-text")

function randomise () {
  return Math.random() > 0.5 ? 1 : -1
}

function getScale () {
  // get a random note and scale
  const note = notes.sort(randomise)[0]
  const { name, intervals } = scales.sort(randomise)[0]
  console.log(`${note} ${name} ${intervals}`)
  scaleNameContainer.innerHTML = `${note} ${name}`
  intervalsContainer.innerHTML = intervals
}

function showStart() {
  startParagraphElement.innerHTML = "Get a random musical scale to practice for two minutes."
}

showStart()
