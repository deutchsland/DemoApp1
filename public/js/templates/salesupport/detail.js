(function(dust){dust.register("detail",body_0);function body_0(chk,ctx){return chk.w("<div class=\"panel-group\" id=\"mainContent\"><div class=\"panel panel-primary\"><div class=\"panel-heading\">投保单详情</div><table class=\"table table-hover table-condensed table-striped\"><thead><tr><th class=\"col-sm-1\">号牌号码</th><th class=\"col-sm-1\">号牌类型</th><th class=\"col-sm-2\">车架号</th><th class=\"col-sm-1\">发票类型</th><th class=\"col-sm-1\">初次登记日期</th><th class=\"col-sm-1\">首年投保日期</th><th class=\"col-sm-1\">车型代码</th><th class=\"col-sm-2\">车辆型号</th><th class=\"col-sm-1\">新车购置价</th><th class=\"col-sm-1\">车辆实际价值</th><th class=\"col-sm-1\">车辆种类</th><th class=\"col-sm-1\">核定载客</th><th class=\"col-sm-1\">核定载质量</th><th class=\"col-sm-1\">行驶里程</th><th class=\"col-sm-1\">行驶证车主</th></tr></thead><tbody>").s(ctx.get(["items"], false),ctx,{"block":body_1},{}).w("</tbody></table><a href=\"\" id=\"tempB\" hidden=\"true\"></a></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<tr><td>").f(ctx.getPath(true, ["tokenNo"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["tokenType"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["vinNo"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["engineNo"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["enrollDate"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["startProposalDate"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["vinTypeNo"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["viechleNo"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["purchasePrice"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["realNo"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["viechleType"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["customerNo"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["quality"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["runDistance"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["carOwnerCard"]),ctx,"h").w("</td><td><table><tr><td><a class=\"btn\" data-toggle=\"tooltip\"  value=\"").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\" data-placement=\"left\" name=\"editBtn\" title=\"维护明细\" href=\"#\"><i class=\"icon-edit icon-large\"></i></a></td><td> ").h("security",ctx,{"block":body_2},{"allowed":"ROLE_ADMIN","roles":body_3},"h").w("</td>").h("if",ctx,{"else":body_4,"block":body_5},{"cond":body_6},"h").w("</tr></table></td><!--&lt;!&ndash; 表示一个成功的或积极的动作 &ndash;&gt;--><!--<button type=\"button\" class=\"btn btn-success\">成功按钮</button>--><!--&lt;!&ndash; 信息警告消息的上下文按钮 &ndash;&gt;--><!--<button type=\"button\" class=\"btn btn-info\">信息按钮</button>--></tr>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<a class=\"btn\" href=\"#\" value=\"").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\" data-toggle=\"tooltip\" data-placement=\"top\" name=\"deleteBtn\" title=\"删除\"><i class=\"icon-remove icon-large\"></i></a>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.f(ctx.getPath(false, ["user","roles"]),ctx,"h");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<td><button type=\"button\" name=\"s1\" value=\"").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\" style=\"margin-left: 18px\"  class=\"btn btn-primary btn-block\">开启</button> </td>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<td><button type=\"button\" name=\"s1\" value=\"").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\" style=\"margin-left: 18px\"  class=\"btn btn-success btn-block\">关闭</button> </td>");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("'").f(ctx.getPath(true, ["status"]),ctx,"h").w("' == '1'");}body_6.__dustBody=!0;return body_0}(dust));