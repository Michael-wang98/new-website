// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Invoked by adding /api/hello to the end of the URL

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
