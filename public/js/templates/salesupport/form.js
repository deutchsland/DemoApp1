(function(dust){dust.register("form",body_0);function body_0(chk,ctx){return chk.w("<form class=\"form-horizontal\"  method=\"post\" id=\"partyForm\"  role=\"form\" ><div class=\"form-group\"><label for=\"tokenNo\"  class=\"col-sm-2 control-label\" ><span class=\"required-indicator\">*</span>号牌号码</label><div class=\"col-sm-2\"><input type=\"text\" class=\"form-control\"  id=\"tokenNo\" name=\"proposal[tokenNo]\" value=\"").f(ctx.getPath(false, ["item","tokenNo"]),ctx,"h").w("\" required/></div><label for=\"tokenType\"  class=\"col-sm-2 control-label\">号牌类型</label><div class=\"col-sm-2\"><input type=\"text\" class=\"form-control\" id=\"tokenType\" name=\"proposal[tokenType]\" value=\"").f(ctx.getPath(false, ["item","tokenType"]),ctx,"h").w("\"  onkeyup=\"value=value.replace(/[\\W]/g,'')\"onbeforepaste=\"clipboardData.setData('text',clipboardData.getData('text').replace(/[^\\d]/g,''))\" placeholder=\"仅限字母+数字\" required /></div><label for=\"vinNo\"  class=\"col-sm-1 control-label\" style=\"width: 100px\"><span class=\"required-indicator\">*</span>车架号</label><div class=\"col-sm-2\"><input type=\"text\" class=\"form-control\" id=\"vinNo\" name=\"proposal[vinNo]\" value=\"").f(ctx.getPath(false, ["item","vinNo"]),ctx,"h").w("\"  onkeyup=\"value=value.replace(/[\\W]/g,'')\"onbeforepaste=\"clipboardData.setData('text',clipboardData.getData('text').replace(/[^\\d]/g,''))\" placeholder=\"仅限字母+数字\" required /></div></div><div class=\"form-group\"><label for=\"engineNo\"  class=\"col-sm-2 control-label\" ><span class=\"required-indicator\">*</span>发动机号</label><div class=\"col-sm-2\"><input type=\"text\"  class=\"form-control\" id=\"engineNo\"  name=\"proposal[engineNo]\" value=\"").f(ctx.getPath(false, ["item","engineNo"]),ctx,"h").w("\" onkeyup=\"value=value.replace(/[\\W]/g,'')\"onbeforepaste=\"clipboardData.setData('text',clipboardData.getData('text').replace(/[^\\d]/g,''))\" placeholder=\"仅限字母+数字\" required/></div><label for=\"enrollDate\" class=\"col-sm-2 control-label\"><span class=\"required-indicator\">*</span>初次登记日期</label><div class=\"col-sm-2\"><input id=\"enrollDate\"  class=\"form-control date datepicker\" name=\"proposal[enrollDate]\"   type=\"text\" value=\"").f(ctx.getPath(false, ["item","enrollDate"]),ctx,"h").w("\"  /></div><label for=\"startProposalDate\"  class=\"col-sm-1 control-label\" style=\"width: 100px\"><span class=\"required-indicator\">*</span>投保日期</label><div class=\"col-sm-2\"><input id=\"startProposalDate\"  class=\"form-control date datepicker\" name=\"proposal[startProposalDate]\"  type=\"text\" value=\"").f(ctx.getPath(false, ["item","startProposalDate"]),ctx,"h").w("\"  /></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\"  for=\"vinTypeNo\">车型代码</label><div class=\"col-sm-2\"><input type=\"text\"  class=\"form-control\" id=\"vinTypeNo\" name=\"proposal[vinTypeNo]\" value=\"").f(ctx.getPath(false, ["item","vinTypeNo"]),ctx,"h").w("\" readonly></div><label for=\"viechleNo\"  class=\"col-sm-2 control-label\" ><span class=\"required-indicator\">*</span>车辆型号</label><div class=\"col-sm-2\"><input type=\"text\"  class=\"form-control\" id=\"viechleNo\" name=\"proposal[viechleNo]\" value=\"").f(ctx.getPath(false, ["item","viechleNo"]),ctx,"h").w("\" ></div><label for=\"purchasePrice\"  class=\"col-sm-1 control-label\" style=\"width: 100px\">新车购置价</label><div class=\"col-sm-2\"><input type=\"text\"  class=\"form-control\" id=\"purchasePrice\" name=\"proposal[purchasePrice]\" value=\"").f(ctx.getPath(false, ["item","purchasePrice"]),ctx,"h").w("\" ></div></div><div class=\"form-group\"><label for=\"realNo\"  class=\"col-sm-2 control-label\" >车辆实际价值</label><div class=\"col-sm-2\"><input type=\"text\"  class=\"form-control\" id=\"realNo\"  name=\"proposal[realNo]\" value=\"").f(ctx.getPath(false, ["item","realNo"]),ctx,"h").w("\" onkeyup=\"value=value.replace(/[\\W]/g,'')\"onbeforepaste=\"clipboardData.setData('text',clipboardData.getData('text').replace(/[^\\d]/g,''))\" placeholder=\"仅限字母+数字\" readonly/></div><label for=\"viechleType\" class=\"col-sm-2 control-label\">车辆种类</label><div class=\"col-sm-2\" ><select id=\"viechleType\"  class=\"form-control\" name=\"proposal[viechleType]\" ><option value=\"0\">家庭自用</option><option value=\"1\">货车</option><option value=\"2\">单位用车</option><option value=\"3\">工地用车</option></select></div><label for=\"customerNo\"  class=\"col-sm-1 control-label\" style=\"width: 100px\" >核定载客</label><div class=\"col-sm-2\"><input id=\"customerNo\"  class=\"form-control\" name=\"proposal[customerNo]\" class=\"required\"  type=\"text\" value=\"\"  required/></div></div><div class=\"form-group\"><label for=\"quality\"  class=\"col-sm-2 control-label\"><span class=\"required-indicator\">*</span>核定载质量</label><div class=\"col-sm-2\"><input type=\"text\"   class=\"form-control\" id=\"quality\" name=\"proposal[quality]\"value=\"").f(ctx.getPath(false, ["item","quality"]),ctx,"h").w("\" title=\"第三方连接地址如 携程网 http://www.ctrip.com\" data-toggle=\"tooltip\" required/></div><label for=\"runDistance\"  class=\"col-sm-2 control-label\" >行驶里程</label><div class=\"col-sm-2\"><input type=\"text\"   class=\"form-control\" id=\"runDistance\" name=\"proposal[runDistance]\"value=\"").f(ctx.getPath(false, ["item","runDistance"]),ctx,"h").w("\" title=\"第三方连接地址如 携程网 http://www.ctrip.com\" data-toggle=\"tooltip\" required/></div><label for=\"carOwnerCard\"  class=\"col-sm-2 control-label\" style=\"width:100px\">行驶证车主</label><div class=\"col-sm-2\"><input type=\"text\"   class=\"form-control\" id=\"carOwnerCard\" name=\"proposal[carOwnerCard]\"value=\"").f(ctx.getPath(false, ["item","carOwnerCard"]),ctx,"h").w("\" title=\"第三方连接地址如 携程网 http://www.ctrip.com\" data-toggle=\"tooltip\" required/></div></div></form><script>/*$(\".form_datetime\").datetimepicker({format: \"yyyy-mm-dd hh:mm:ss\",autoclose: true,todayBtn: true,pickerPosition: \"bottom-left\"});console.log(\"log\");*/$(function(){var datepickerOption = {format: \"yyyy-mm-dd\",autoclose: true,language: 'zh-CN',todayHighlight: true,};$('.datepicker').datepicker(datepickerOption);});</script>");}body_0.__dustBody=!0;return body_0}(dust));