import {IfStatement} from "ts-morph";
import {handleExpression} from "../expressions";
import {handleStatement} from "../statements";

export class MorphIf {
  public run(s: IfStatement) {
    let expr = handleExpression(s.getExpression());
    const cname = s.getExpression().constructor.name;
    if (cname === "Identifier" || cname === "PropertyAccessExpression") {
      expr += " IS NOT INITIAL";
    }
    let ret = "IF " + expr + ".\n";

    ret += handleStatement(s.getThenStatement());

    const el = s.getElseStatement();
    if (el) {
      ret += "ELSE.\n";
      ret += handleStatement(el);
    }

    ret += "ENDIF.\n";
    return ret;
  }
}