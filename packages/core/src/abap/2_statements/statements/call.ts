import {IStatement} from "./_statement";
import {str, seq, altPrio} from "../combi";
import {MethodCallChain, MethodSource, MethodCallBody} from "../expressions";
import {IStatementRunnable} from "../statement_runnable";

// method call
export class Call implements IStatement {

  public getMatcher(): IStatementRunnable {

    const call = seq(str("CALL"),
                     str("METHOD"),
                     new MethodSource(),
                     new MethodCallBody());

    return altPrio(call, new MethodCallChain());
  }

}