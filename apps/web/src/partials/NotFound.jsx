import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <div className="max-w-prose w-full">
      <p lass="text-left font-small text-cyan-600">Помилка 404</p>
      <h2 className="text-3xl font-bold mb-4">Йойк! Cторінка не&nbsp;знайдена!</h2>
      <p className="mb-3">Швидше за все, ця&nbsp;сторінка ніколи не&nbsp;існувала, або стала непотрібною і я її&nbsp;грохнув.</p>
      <p className="mb-3">Так&nbsp;буває, не&nbsp;засмучуйтесь. <Link to="/" className="text-indigo-600">На&nbsp;головній</Link> є ще&nbsp;сторінки, не&nbsp;гірші за&nbsp;цю.</p>
      <p>Скаржитися сюди&nbsp;→ <a href="mailto:yar.usenko.inc@gmail.com" className="text-indigo-600">yar.usenko.inc@gmail.com</a></p>
    </div>
  )
}
