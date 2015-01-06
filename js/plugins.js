// Copyright (c) 2015 Walter Bender
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 3 of the License, or
// (at your option) any later version.
//
// You should have received a copy of the GNU General Public License
// along with this library; if not, write to the Free Software
// Foundation, 51 Franklin Street, Suite 500 Boston, MA 02110-1335 USA

FLOWPLUGINS = '{"publish":"if (args.length == 1) {doPublish(args[0]);};","savesvg":"if (args.length == 1) {doSaveSVG(canvas, turtles, args[0])};","print":"if (args.length == 1) {var msgContainer = msgText.parent; msgContainer.visible = true; msgText.text = args[0].toString(); msgContainer.updateCache(); stage.swapChildren(msgContainer, last(stage.children));};","showblocks":"showBlocks(); turtleDelay = DEFAULTDELAY;","hideblocks":"hideBlocks(); turtleDelay = 0;","speak":"meSpeak.speak(args[0]);","setlang":"fromLang = parseArg(activity, turtle, blocks.blockList[blk].connections[1]); toLang = parseArg(activity, turtle, blocks.blockList[blk].connections[2]);"}'

ARGPLUGINS = '{"time":"var d = new Date(); blocks.blockList[blk].value = (d.getTime() - time) / 1000;","mousex":"blocks.blockList[blk].value = stageX;","mousey":"blocks.blockList[blk].value = stageY;","mousebutton":"blocks.blockList[blk].value = stageMouseDown;","keyboard":"blocks.blockList[blk].value = currentKeyCode; lastKeyCode = currentKeyCode; currentKey = \"\"; currentKeyCode = 0;","translate":"var publicKey = \"nGhwbdV7TrtzC9qLp3DZ\"; var secretKey = \"3b68e1d00446eed728cdda66280a8312\"; var apiURL = \"https://community-onehourtranslation.p.mashape.com/mt/\"; var key = \"TranslatedText\"; var text = parseArg(activity, turtle, blocks.blockList[blk].connections[1]); var targetLang = \"Spanish\"; var args = \"translate/text?public_key=\" + publicKey + \"&secret_key=\" + secretKey + \"&source_content=\" + text + \"&source_language=\" + fromLang + \"&target_language=\" + toLang; var request = new XMLHttpRequest(); request.open(\"GET\", apiURL + args, false); request.setRequestHeader(\"X-Mashape-Authorization\", \"3Rfxc7fwp2mshJxgtDxKSueYna8Ap1qZfAcjsn2hjpuWPuBCrI\"); request.send(null); var value = JSON.parse(request.responseText)[\"results\"][key]; if (!value) { errorMsg(\"Problem with the language setting.\"); value = \"\"; } blocks.blockList[blk].value = value;","detectlang":"var publicKey = \"nGhwbdV7TrtzC9qLp3DZ\"; var secretKey = \"3b68e1d00446eed728cdda66280a8312\"; var apiURL = \"https://community-onehourtranslation.p.mashape.com/mt/\" var key = \"language\"; var text = parseArg(activity, turtle, blocks.blockList[blk].connections[1]); var args = \"detect/text?public_key=\" + publicKey + \"&secret_key=\" + secretKey + \"&source_content=\" + text; var request = new XMLHttpRequest(); request.open(\"GET\", apiURL + args, false); request.setRequestHeader(\"X-Mashape-Authorization\", \"3Rfxc7fwp2mshJxgtDxKSueYna8Ap1qZfAcjsn2hjpuWPuBCrI\"); request.send(null); var value = JSON.parse(request.responseText)[\"results\"][key]; if (!value) { errorMsg(\"Problem with the language setting.\"); value = \"\"; } blocks.blockList[blk].value = value;","weatherincity":"var block = blocks.blockList[blk]; var apiURL = \"https://george-vustrey-weather.p.mashape.com/api.php?location=\"; var conns = block.connections; var city = parseArg(activity, turtle, conns[1]); var daysAhead = parseInt(parseArg(activity, turtle, conns[2])); if (daysAhead < -1 || daysAhead > 5) { errorMsg(\"Days ahead must be in the range of -1 to 5.\"); daysAhead = 0; } if (block.cacheCity === city && block.cache !== undefined) { var response = block.cache; } else { var request = new XMLHttpRequest(); request.open(\"GET\", apiURL + city, false); request.setRequestHeader(\"X-Mashape-Authorization\", \"3Rfxc7fwp2mshJxgtDxKSueYna8Ap1qZfAcjsn2hjpuWPuBCrI\"); request.send(null); var response = request.responseText; block.cacheCity = city; block.cache = response; } var forecast = JSON.parse(response); block.value = forecast[daysAhead + 1][\"condition\"];","weatherincityhigh":"var block = blocks.blockList[blk]; var apiURL = \"https://george-vustrey-weather.p.mashape.com/api.php?location=\"; var conns = block.connections; var city = parseArg(activity, turtle, conns[1]); var daysAhead = parseInt(parseArg(activity, turtle, conns[2])); if (daysAhead < -1 || daysAhead > 5) { errorMsg(\"Days ahead must be in the range of -1 to 5.\"); daysAhead = 0; } if (block.cacheCity === city && block.cache !== undefined) { var response = block.cache; } else { var request = new XMLHttpRequest(); request.open(\"GET\", apiURL + city, false); request.setRequestHeader(\"X-Mashape-Authorization\", \"3Rfxc7fwp2mshJxgtDxKSueYna8Ap1qZfAcjsn2hjpuWPuBCrI\"); request.send(null); var response = request.responseText; block.cacheCity = city; block.cache = response; } var forecast = JSON.parse(response); block.value = parseInt(forecast[daysAhead + 1][\"high_celsius\"]);","weatherincitylow":"var block = blocks.blockList[blk]; var apiURL = \"https://george-vustrey-weather.p.mashape.com/api.php?location=\"; var conns = block.connections; var city = parseArg(activity, turtle, conns[1]); var daysAhead = parseInt(parseArg(activity, turtle, conns[2])); if (daysAhead < -1 || daysAhead > 5) { errorMsg(\"Days ahead must be in the range of -1 to 5.\"); daysAhead = 0; } if (block.cacheCity === city && block.cache !== undefined) { var response = block.cache; } else { var request = new XMLHttpRequest(); request.open(\"GET\", apiURL + city, false); request.setRequestHeader(\"X-Mashape-Authorization\", \"3Rfxc7fwp2mshJxgtDxKSueYna8Ap1qZfAcjsn2hjpuWPuBCrI\"); request.send(null); var response = request.responseText; block.cacheCity = city; block.cache = response; } var forecast = JSON.parse(response); block.value = parseInt(forecast[daysAhead + 1][\"low_celsius\"]);"}'

BLOCKPLUGINS = '{"time":"var timeBlock = new ProtoBlock(\'time\'); timeBlock.palette = palettes.dict[\'sensors\']; blocks.protoBlockDict[\'time\'] = timeBlock; timeBlock.parameterBlock(); timeBlock.staticLabels.push(\'time\');","mousex":"var mousexBlock = new ProtoBlock(\'mousex\'); mousexBlock.palette = palettes.dict[\'sensors\']; blocks.protoBlockDict[\'mousex\'] = mousexBlock; mousexBlock.parameterBlock(); mousexBlock.staticLabels.push(\'mouse x\');","mousey":"var mouseyBlock = new ProtoBlock(\'mousey\'); mouseyBlock.palette = palettes.dict[\'sensors\']; blocks.protoBlockDict[\'mousey\'] = mouseyBlock; mouseyBlock.parameterBlock(); mouseyBlock.staticLabels.push(\'mouse y\');","mousebutton":"var mousebuttonBlock = new ProtoBlock(\'mousebutton\'); mousebuttonBlock.palette = palettes.dict[\'sensors\']; blocks.protoBlockDict[\'mousebutton\'] = mousebuttonBlock; mousebuttonBlock.booleanZeroArgBlock(); mousebuttonBlock.staticLabels.push(\'mouse button\');","keyboard":"var keyboardBlock = new ProtoBlock(\'keyboard\'); keyboardBlock.palette = palettes.dict[\'sensors\']; blocks.protoBlockDict[\'keyboard\'] = keyboardBlock; keyboardBlock.parameterBlock(); keyboardBlock.staticLabels.push(\'keyboard\');","loudness":"var loudnessBlock = new ProtoBlock(\'loudness\'); loudnessBlock.palette = palettes.dict[\'sensors\']; blocks.protoBlockDict[\'loudness\'] = loudnessBlock; loudnessBlock.parameterBlock(); loudnessBlock.staticLabels.push(\'loudness\');","wait":"var waitBlock = new ProtoBlock(\'wait\'); waitBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'wait\'] = waitBlock; waitBlock.oneArgBlock(); waitBlock.staticLabels.push(\'wait\'); waitBlock.defaults.push(1);","vspace":"var vspaceBlock = new ProtoBlock(\'vspace\'); vspaceBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'vspace\'] = vspaceBlock; vspaceBlock.zeroArgBlock();","print":"var printBlock = new ProtoBlock(\'print\'); printBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'print\'] = printBlock; printBlock.oneArgBlock(); printBlock.staticLabels.push(\'print\'); printBlock.docks[1][2] = \'anyin\';","xturtle":"var getxTurtleBlock = new ProtoBlock(\'xturtle\'); getxTurtleBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'xturtle\'] = getxTurtleBlock; getxTurtleBlock.oneArgMathBlock(); getxTurtleBlock.staticLabels.push(\'turtle x\'); getxTurtleBlock.defaults.push(0); getxTurtleBlock.docks[1][2] = \'anyin\';","yturtle":"var getyTurtleBlock = new ProtoBlock(\'yturtle\'); getyTurtleBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'yturtle\'] = getyTurtleBlock; getyTurtleBlock.oneArgMathBlock(); getyTurtleBlock.staticLabels.push(\'turtle y\'); getyTurtleBlock.defaults.push(0); getyTurtleBlock.docks[1][2] = \'anyin\';","startTurtle":"var startTurtleBlock = new ProtoBlock(\'startTurtle\'); startTurtleBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'startTurtle\'] = startTurtleBlock; startTurtleBlock.oneArgBlock(); startTurtleBlock.docks[1][2] = \'anyin\'; startTurtleBlock.defaults.push(0); startTurtleBlock.staticLabels.push(\'start turtle\');","stopTurtle":"var stopTurtleBlock = new ProtoBlock(\'stopTurtle\'); stopTurtleBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'stopTurtle\'] = stopTurtleBlock; stopTurtleBlock.oneArgBlock(); stopTurtleBlock.docks[1][2] = \'anyin\'; stopTurtleBlock.defaults.push(0); stopTurtleBlock.staticLabels.push(\'stop turtle\');","publish":"var pubBlock = new ProtoBlock(\'publish\'); pubBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'publish\'] = pubBlock; pubBlock.oneArgBlock(); pubBlock.defaults.push(\'comment\'); pubBlock.staticLabels.push(\'publish\'); pubBlock.docks[1][2] = \'textin\';","savesvg":"var svgBlock = new ProtoBlock(\'savesvg\'); svgBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'savesvg\'] = svgBlock; svgBlock.oneArgBlock(); svgBlock.defaults.push(\'title\'); svgBlock.staticLabels.push(\'save svg\'); svgBlock.docks[1][2] = \'textin\';","showblocks":"var showBlocks = new ProtoBlock(\'showblocks\'); showBlocks.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'showblocks\'] = showBlocks; showBlocks.zeroArgBlock(); showBlocks.staticLabels.push(\'show\');","hideblocks":"var hideBlocks = new ProtoBlock(\'hideblocks\'); hideBlocks.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'hideblocks\'] = hideBlocks; hideBlocks.zeroArgBlock(); hideBlocks.staticLabels.push(\'hide\');","eval":"var evalBlock = new ProtoBlock(\'eval\'); evalBlock.palette = palettes.dict[\'number\']; blocks.protoBlockDict[\'eval\'] = evalBlock; evalBlock.twoArgMathBlock(); evalBlock.docks[1][2] = \'textin\'; evalBlock.defaults.push(\'x\'); evalBlock.defaults.push(100); evalBlock.staticLabels.push(\'eval\'); evalBlock.staticLabels.push(\'f(x)\'); evalBlock.staticLabels.push(\'x\');","speak":"var speakBlock = new ProtoBlock(\'speak\'); speakBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'speak\'] = speakBlock; speakBlock.oneArgBlock(); speakBlock.staticLabels.push(\'speak\'); speakBlock.defaults.push(\'hello\'); speakBlock.docks[1][2] = \'textin\';","playback":"var audioBlock = new ProtoBlock(\'playback\'); audioBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'playback\'] = audioBlock; audioBlock.defaults.push(null); audioBlock.oneArgBlock(); audioBlock.docks[1][2] = \'mediain\'; audioBlock.staticLabels.push(\'playback\');","stopplayback":"var audioStopBlock = new ProtoBlock(\'stopplayback\'); audioStopBlock.palette = palettes.dict[\'extras\']; blocks.protoBlockDict[\'stopplayback\'] = audioStopBlock; audioStopBlock.zeroArgBlock(); audioStopBlock.staticLabels.push(\'stop\');","translate":"var TranslateBlock = new ProtoBlock(\'translate\'); TranslateBlock.palette = palettes.dict[\'mashape\']; blocks.protoBlockDict[\'translate\'] = TranslateBlock; TranslateBlock.oneArgMathBlock(); TranslateBlock.docks[0][2] = \'textout\'; TranslateBlock.docks[1][2] = \'textin\'; TranslateBlock.defaults.push(\'Hello\'); TranslateBlock.staticLabels.push(\'translate\');","detectlang":"var DetectLangBlock = new ProtoBlock(\'detectlang\'); DetectLangBlock.palette = palettes.dict[\'mashape\']; blocks.protoBlockDict[\'detectlang\'] = DetectLangBlock; DetectLangBlock.oneArgMathBlock(); DetectLangBlock.docks[0][2] = \'textout\'; DetectLangBlock.docks[1][2] = \'anyin\'; DetectLangBlock.defaults.push(\'Hello\'); DetectLangBlock.staticLabels.push(\'detect lang\');","setlang":"var SetLangBlock = new ProtoBlock(\'setlang\'); SetLangBlock.palette = palettes.dict[\'mashape\']; blocks.protoBlockDict[\'setlang\'] = SetLangBlock; SetLangBlock.twoArgBlock(); SetLangBlock.docks[1][2] = \'anyin\'; SetLangBlock.docks[2][2] = \'anyin\'; SetLangBlock.defaults.push(\'English\', \'Spanish\'); SetLangBlock.staticLabels.push(\'set lang\', \'source\', \'target\');","weatherincity":"var weatherBlock = new ProtoBlock(\'weatherincity\'); weatherBlock.palette = palettes.dict[\'mashape\']; blocks.protoBlockDict[\'weatherincity\'] = weatherBlock; weatherBlock.twoArgMathBlock(); weatherBlock.docks[0][2] = \'textout\'; weatherBlock.docks[1][2] = \'anyin\'; weatherBlock.defaults.push(\'Canberra\'); weatherBlock.defaults.push(1); weatherBlock.staticLabels.push(\'forecast\'); weatherBlock.staticLabels.push(\'city\'); weatherBlock.staticLabels.push(\'day\');","weatherincityhigh":"var weatherHighBlock = new ProtoBlock(\'weatherincityhigh\'); weatherHighBlock.palette = palettes.dict[\'mashape\']; blocks.protoBlockDict[\'weatherincityhigh\'] = weatherHighBlock; weatherHighBlock.twoArgMathBlock(); weatherHighBlock.docks[1][2] = \'anyin\'; weatherHighBlock.defaults.push(\'Canberra\'); weatherHighBlock.defaults.push(1); weatherHighBlock.staticLabels.push(\'high\'); weatherHighBlock.staticLabels.push(\'city\'); weatherHighBlock.staticLabels.push(\'day\');","weatherincitylow":"var weatherLowBlock = new ProtoBlock(\'weatherincitylow\'); weatherLowBlock.palette = palettes.dict[\'mashape\']; blocks.protoBlockDict[\'weatherincitylow\'] = weatherLowBlock; weatherLowBlock.twoArgMathBlock(); weatherLowBlock.docks[1][2] = \'anyin\'; weatherLowBlock.defaults.push(\'Canberra\'); weatherLowBlock.defaults.push(1); weatherLowBlock.staticLabels.push(\'low\'); weatherLowBlock.staticLabels.push(\'city\'); weatherLowBlock.staticLabels.push(\'day\');"}'
