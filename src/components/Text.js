import React from "react"

const FormattedMessage = ({ id }) => {
  const FormatText = txt => {
    let text = "",
      words = txt.split("-")

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1)
      text += (i === 0 ? "" : " ") + words[i]
    }
    return text
  }
  return <span>{FormatText(id)}</span>
}

const Translation = ({ id }) => <FormattedMessage id={id} />

export default Translation
