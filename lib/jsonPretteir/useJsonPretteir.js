import { useEffect } from "react";
import style from "./useJsonPretteir.module.scss";
function UseJsonPretteir({
  prettyjson,
  preBcl,
  stringCl,
  numberCl,
  booleanCl,
  nullCl,
  keyCl,
  string_font_size,
  number_font_size,
  boolean_font_size,
  null_font_size,
  key_font_size,
}) {
  useEffect(() => {
    document.documentElement.style.setProperty("--preBcl", preBcl || "white");
    document.documentElement.style.setProperty(
      "--stringCl",
      stringCl || "green"
    );
    document.documentElement.style.setProperty(
      "--numberCl",
      numberCl || "darkorange"
    );
    document.documentElement.style.setProperty(
      "--booleanCl",
      booleanCl || "blue"
    );
    document.documentElement.style.setProperty("--nullCl", nullCl || "magenta");
    document.documentElement.style.setProperty("--keyCl", keyCl || "red");
    document.documentElement.style.setProperty(
      "--string_font_size",
      string_font_size || ".8rem"
    );
    document.documentElement.style.setProperty(
      "--number_font_size",
      number_font_size || ".8rem"
    );
    document.documentElement.style.setProperty(
      "--boolean_font_size",
      boolean_font_size || ".8rem"
    );
    document.documentElement.style.setProperty(
      "--null_font_size",
      null_font_size || ".8rem"
    );
    document.documentElement.style.setProperty(
      "--key_font_size",
      key_font_size || ".8rem"
    );
  }, [
    preBcl,
    stringCl,
    numberCl,
    booleanCl,
    nullCl,
    keyCl,
    string_font_size,
    number_font_size,
    boolean_font_size,
    null_font_size,
    key_font_size,
  ]);

  function syntaxHighlight(json) {
    json = json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        var cls = "number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "key";
          } else {
            cls = "string";
          }
        } else if (/true|false/.test(match)) {
          cls = "boolean";
        } else if (/null/.test(match)) {
          cls = "null";
        }
        return '<span class="' + cls + '">' + match + "</span>";
      }
    );
  }
  let str = JSON.stringify(prettyjson, undefined, 4);
  return (
    <pre
      className={style.preStyle}
      dangerouslySetInnerHTML={{ __html: syntaxHighlight(str) }}
    />
  );
}
export default UseJsonPretteir;
