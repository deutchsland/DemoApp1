(function(dust){dust.register("add",body_0);var blocks={"content":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/master",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<div class=\"panel panel-primary\"><div class=\"panel-heading\">").f(ctx.get(["title"], false),ctx,"h").w("</div><div class=\"panel-body\">").p("user/_form",ctx,ctx,{}).w("</div></div>");}body_1.__dustBody=!0;return body_0}(dust));