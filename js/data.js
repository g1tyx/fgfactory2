//---
var DATA = {
    //---
    scenarii:[
        //---
        { id:'tut', label:'scenario_tut', desc:'scenarioDesc_tut', ready:true, data:{
            //---
            victoryReqs:[{ id:'tutMission6', count:1 }],
            //---
            elems:[
                //---
                {	id:'tutMission1',	        type:'mission',	                                        label:'tutMission1', desc:'tutMission1Desc', costs:[{ id:'itemStone', count:5 }], rewards:[{ id:'itemStone', count:5 }] },
                {	id:'tutMission2',	        type:'mission',	reqs:[{ id:'tutMission1', count:1 }],   label:'tutMission2', desc:'tutMission2Desc', costs:[{ id:'machineFurnace1', count:1 }], rewards:[{ id:'machineFurnace1', count:1 }] },
                {	id:'tutMission3',	        type:'mission',	reqs:[{ id:'tutMission2', count:1 }],   label:'tutMission3', desc:'tutMission3Desc', costs:[{ id:'itemIronPlate', count:1 }], rewards:[{ id:'itemIronPlate', count:1 }] },
                {	id:'tutMission4',	        type:'mission',	reqs:[{ id:'tutMission3', count:1 }],   label:'tutMission4', desc:'tutMission4Desc', costs:[{ id:'machineMiner1', count:1 }], rewards:[{ id:'machineMiner1', count:1 }] },
                {	id:'tutMission5',	        type:'mission',	reqs:[{ id:'tutMission4', count:1 }],   label:'tutMission5', desc:'tutMission5Desc', costs:[{ id:'storerChest', count:1 }], rewards:[{ id:'storerChest', count:1 }] },
                {	id:'tutMission6',	        type:'mission',	reqs:[{ id:'tutMission5', count:1 }],   label:'tutMission6', desc:'tutMission6Desc', costs:[{ id:'itemStone', count:100 },{ id:'itemIron', count:100 },{ id:'itemCoal', count:100 }], rewards:[{ id:'itemStone', count:100 },{ id:'itemIron', count:100 },{ id:'itemCoal', count:100 }] },
                //---
                {	id:'itemStone',		        type:'item',	                                        label:'itemStone', img:'img/items/Stone.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualStone', lines:[ 'lineStone1' ] },
                {	id:'recipeStone',	        type:'recipe',	                                        time:1, outputs:[{ id:'itemStone', count:1 }] },
                {	id:'manualStone',	        type:'manual',	                                        recipeId:'recipeStone' },
                {	id:'lineStone1',	        type:'line',	reqs:[{ id:'tutMission4', count:1 }],   machineId:'machineMiner1', recipeId:'recipeStone' },
                //---
                {	id:'itemIron',		        type:'item',	reqs:[{ id:'tutMission2', count:1 }],   label:'itemIron', img:'img/items/Iron.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualIron', lines:[ 'lineIron1' ] },
                {	id:'recipeIron',	        type:'recipe',	reqs:[{ id:'tutMission2', count:1 }],   time:1, outputs:[{ id:'itemIron', count:1 }] },
                {	id:'manualIron',	        type:'manual',	reqs:[{ id:'tutMission2', count:1 }],   recipeId:'recipeIron' },
                {	id:'lineIron1',	            type:'line',	reqs:[{ id:'tutMission4', count:1 }],   machineId:'machineMiner1', recipeId:'recipeIron' },
                //---
                {	id:'itemCoal',		        type:'item',	reqs:[{ id:'tutMission2', count:1 }],   label:'itemCoal', img:'img/items/Coal.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualCoal', lines:[ 'lineCoal1' ] },
                {	id:'recipeCoal',	        type:'recipe',	reqs:[{ id:'tutMission2', count:1 }],   time:1, outputs:[{ id:'itemCoal', count:1 }] },
                {	id:'manualCoal',	        type:'manual',	reqs:[{ id:'tutMission2', count:1 }],   recipeId:'recipeCoal' },
                {	id:'lineCoal1',	            type:'line',	reqs:[{ id:'tutMission4', count:1 }],   machineId:'machineMiner1', recipeId:'recipeCoal' },
                //---
                {	id:'itemIronPlate',		    type:'item',	reqs:[{ id:'tutMission2', count:1 }],   label:'itemIronPlate', img:'img/items/IronPlate.png', storage:{ base:100, storerId:'storerChest' }, lines:[ 'lineIronPlate1' ] },
                {	id:'recipeIronPlate',	    type:'recipe',	reqs:[{ id:'tutMission2', count:1 }],   time:3.2, outputs:[{ id:'itemIronPlate', count:1 }],	inputs:[{ id:'itemIron', count:1 }] },
                {	id:'lineIronPlate1',        type:'line',	reqs:[{ id:'tutMission2', count:1 }],   machineId:'machineFurnace1', recipeId:'recipeIronPlate' },
                //---
                {	id:'itemIronWheel',		    type:'item',	reqs:[{ id:'tutMission3', count:1 }],   label:'itemIronWheel', img:'img/items/IronWheel.png', storage:{ base:100, storerId:'storerChest' }, manualId:'manualIronWheel' },
                {	id:'recipeIronWheel',	    type:'recipe',	reqs:[{ id:'tutMission3', count:1 }],   time:1, outputs:[{ id:'itemIronWheel', count:1 }],	inputs:[{ id:'itemIronPlate', count:2 }]	},
                {	id:'manualIronWheel',	    type:'manual',	reqs:[{ id:'tutMission3', count:1 }],   recipeId:'recipeIronWheel' },
                //---
                {	id:'machineFurnace1',	    type:'machine',	reqs:[{ id:'tutMission1', count:1 }],   label:'machineFurnace1', img:'img/machines/Furnace1.png', manualId:'manualFurnace1', speed:0.25,	energy:{ id:'itemCoal', count:0.02 } },
                {	id:'recipeFurnace1',	    type:'recipe',	reqs:[{ id:'tutMission1', count:1 }],   time:2, outputs:[{ id:'machineFurnace1', count:1 }], inputs:[{ id:'itemStone', count:5 }] },
                {	id:'manualFurnace1',	    type:'manual',	reqs:[{ id:'tutMission1', count:1 }],   recipeId:'recipeFurnace1' },
                //---
                {	id:'machineMiner1',	        type:'machine',	reqs:[{ id:'tutMission3', count:1 }],   label:'machineMiner1', img:'img/machines/Drill1.png', manualId:'manualMiner1', speed:0.25,	energy:{ id:'itemCoal', count:0.04 } },
                {	id:'recipeMiner1',	        type:'recipe',	reqs:[{ id:'tutMission3', count:1 }],   time:2, outputs:[{ id:'machineMiner1', count:1 }], inputs:[{ id:'itemIronWheel', count:3 },{ id:'itemIronPlate', count:3 },{ id:'machineFurnace1', count:1 }] },
                {	id:'manualMiner1',	        type:'manual',	reqs:[{ id:'tutMission3', count:1 }],   recipeId:'recipeMiner1' },
                //---
                {	id:'storerChest',	        type:'storer',	reqs:[{ id:'tutMission4', count:1 }],   label:'storerChest', img:'img/storers/Chest.png', manualId:'manualChest' },
                {	id:'recipeChest',	        type:'recipe',	reqs:[{ id:'tutMission4', count:1 }],   time:1, outputs:[{ id:'storerChest', count:1 }], inputs:[{ id:'itemIronPlate', count:8 }] },
                {	id:'manualChest',	        type:'manual',	reqs:[{ id:'tutMission4', count:1 }],   recipeId:'recipeChest' },
            ]
        }},
        //---
        { id:'factorio1', label:'scenario_factorio1', desc:'scenarioDesc_factorio1', ready:false, data:{
            //---
            victoryReqs:[{ id:'factorio1Obj', count:1 }],
            //---
            elems:[
                //---
                {	id:'factorio1Obj',	        type:'mission',	                                        label:'factorio1Obj', desc:'factorio1ObjDesc', costs:[{ id:'itemArmor', count:1 },{ id:'itemRocketPart', count:100 },{ id:'itemSatellite', count:1 }] },
                //---
                {	id:'itemStone',		        type:'item',	                                        label:'itemStone', img:'img/items/Stone.png', storage:{ base:1 } },
                {	id:'recipeStone',	        type:'recipe',	                                        time:1, outputs:[{ id:'itemStone', count:1 }] },
                {	id:'manualStone',	        type:'manual',	                                        recipeId:'recipeStone' },
                //---
                {	id:'itemIron',	            type:'item',	                                        label:'itemIron', img:'img/items/Iron.png', storage:{ base:1 } },
                {	id:'recipeIron',	        type:'recipe',	                                        time:1, outputs:[{ id:'itemIron', count:1 }] },
                {	id:'manualIron',	        type:'manual',	                                        recipeId:'recipeIron' },
                //---
                {	id:'itemCopper',	        type:'item',	                                        label:'itemCopper', img:'img/items/Copper.png', storage:{ base:1 } },
                {	id:'recipeCopper',	        type:'recipe',	                                        time:1, outputs:[{ id:'itemCopper', count:1 }] },
                {	id:'manualCopper',	        type:'manual',	                                        recipeId:'recipeCopper' },
                //---
                {	id:'itemCoal',	            type:'item',	                                        label:'itemCoal', img:'img/items/Coal.png', storage:{ base:1 } },
                {	id:'recipeCoal',	        type:'recipe',	                                        time:1, outputs:[{ id:'itemCoal', count:1 }] },
                {	id:'manualCoal',	        type:'manual',	                                        recipeId:'recipeCoal' },
                //---
                {	id:'itemWater',	            type:'item',	                                        label:'itemWater', img:'img/items/Water.png', storage:{ base:1 } },
                {	id:'recipeWater',	        type:'recipe',	                                        time:1, outputs:[{ id:'itemWater', count:1 }] },
                //---
                {	id:'itemOil',	            type:'item',	                                        label:'itemOil', img:'img/items/Oil.png', storage:{ base:1 } },
                {	id:'recipeOil',	            type:'recipe',	                                        time:1, outputs:[{ id:'itemOil', count:1 }] },
                //---
                {	id:'itemElectricity',       type:'item',	                                        label:'itemElectricity', img:'img/items/Electricity.png', storage:{ base:1 } },
                //---
                {	id:'itemBrick',             type:'item',	                                        label:'itemBrick', img:'img/items/Brick.png', storage:{ base:1 } },
                //---
                {	id:'itemIronPlate',         type:'item',	                                        label:'itemIronPlate', img:'img/items/IronPlate.png', storage:{ base:1 } },
                //---
                {	id:'itemCopperPlate',       type:'item',	                                        label:'itemCopperPlate', img:'img/items/CopperPlate.png', storage:{ base:1 } },
                //---
                {	id:'itemSteel',             type:'item',	                                        label:'itemSteel', img:'img/items/Steel.png', storage:{ base:1 } },
                //---
                {	id:'itemConcrete',          type:'item',	                                        label:'itemConcrete', img:'img/items/Concrete.png', storage:{ base:1 } },
                //---
                {	id:'itemEngine1',           type:'item',	                                        label:'itemEngine1', img:'img/items/Engine1.png', storage:{ base:1 } },
                //---
                {	id:'itemSulfur',            type:'item',	                                        label:'itemSulfur', img:'img/items/Sulfur.png', storage:{ base:1 } },
                //---
                {	id:'itemSulfuricAcid',      type:'item',	                                        label:'itemSulfuricAcid', img:'img/items/SulfuricAcid.png', storage:{ base:1 } },
                //---
                {	id:'itemSolidFuel',         type:'item',	                                        label:'itemSolidFuel', img:'img/items/SolidFuel.png', storage:{ base:1 } },
                //---
                {	id:'itemHeavyOil',          type:'item',	                                        label:'itemHeavyOil', img:'img/items/HeavyOil.png', storage:{ base:1 } },
                //---
                {	id:'itemLightOil',          type:'item',	                                        label:'itemLightOil', img:'img/items/LightOil.png', storage:{ base:1 } },
                //---
                {	id:'itemLubricant',         type:'item',	                                        label:'itemLubricant', img:'img/items/Lubricant.png', storage:{ base:1 } },
                //---
                {	id:'itemPetrol',	        type:'item',	                                        label:'itemPetrol', img:'img/items/Petrol.png', storage:{ base:1 } },
                //---
                {	id:'itemPlastic',	        type:'item',	                                        label:'itemPlastic', img:'img/items/Plastic.png', storage:{ base:1 } },
                //---
                {	id:'itemBattery',	        type:'item',	                                        label:'itemBattery', img:'img/items/Battery.png', storage:{ base:1 } },
                //---
                {	id:'itemCircuit3',          type:'item',	                                        label:'itemCircuit3', img:'img/items/Circuit3.png', storage:{ base:1 } },
                //---
                {	id:'itemEngine2',           type:'item',	                                        label:'itemEngine2', img:'img/items/Engine2.png', storage:{ base:1 } },
                //---
                {	id:'itemRocketFuel',        type:'item',	                                        label:'itemRocketFuel', img:'img/items/RocketFuel.png', storage:{ base:1 } },
                //---
                {	id:'itemArmor',		        type:'item',	                                        label:'itemArmor', img:'img/items/Armor.png', storage:{ base:1 } },
                //---
                {	id:'itemRocketPart',        type:'item',	                                        label:'itemRocketPart', img:'img/items/RocketPart.png', storage:{ base:5 }, lines:[ 'lineRocketPart' ] },
                {	id:'recipeRocketPart',	    type:'recipe',	                                        time:3, outputs:[{ id:'itemRocketPart', count:1 }],	inputs:[{ id:'itemCopperPlate', count:525 },{ id:'itemIronPlate', count:150 },{ id:'itemPlastic', count:150 },{ id:'itemCircuit3', count:10 },{ id:'itemRocketFuel', count:10 },{ id:'itemSteel', count:20 }] },
                {	id:'lineRocketPart',        type:'line',	                                        machineId:'machineRocketSilo', recipeId:'recipeRocketPart' },
                //---
                {	id:'itemSatellite',		    type:'item',	                                        label:'itemSatellite', img:'img/items/Satellite.png', storage:{ base:1 }, manualId:'manualSatellite', },
                {	id:'recipeSatellite',	    type:'recipe',	                                        time:5, outputs:[{ id:'itemSatellite', count:1 }],	inputs:[{ id:'itemBattery', count:500 },{ id:'itemCopperPlate', count:4800 },{ id:'itemIronPlate', count:1800 },{ id:'itemPlastic', count:500 },{ id:'itemCircuit3', count:100 },{ id:'itemRocketFuel', count:50 },{ id:'itemSteel', count:700 }] },
                {	id:'manualSatellite',       type:'manual',	                                        recipeId:'recipeSatellite' },
                //---
                {	id:'machineAssembler3',     type:'machine',	                                        label:'machineAssembler3', img:'img/machines/Assembler3.png', manualId:'manualAssembler3', speed:1.25, energy:{ id:'itemElectricity', count:375e3 } },
                {	id:'recipeAssembler3',	    type:'recipe',	                                        time:1, outputs:[{ id:'machineAssembler3', count:1 }], inputs:[{ id:'itemCopperPlate', count:148 },{ id:'itemIronPlate', count:130 },{ id:'itemPlastic', count:40 },{ id:'itemSteel', count:4 }] },
                {	id:'manualAssembler3',      type:'manual',	                                        recipeId:'recipeAssembler3' },
                //---
                {	id:'machineChemicalPlant',  type:'machine',	                                        label:'machineChemicalPlant', img:'img/machines/ChemicalPlant.png', manualId:'manualChemicalPlant', speed:1, energy:{ id:'itemElectricity', count:210e3 } },
                {	id:'recipeChemicalPlant',	type:'recipe',	                                        time:5, outputs:[{ id:'machineChemicalPlant', count:1 }], inputs:[{ id:'itemCopperPlate', count:8 },{ id:'itemIronPlate', count:20 },{ id:'itemSteel', count:5 }] },
                {	id:'manualChemicalPlant',   type:'manual',	                                        recipeId:'recipeChemicalPlant' },
                //---
                {	id:'machineRefinery',       type:'machine',	                                        label:'machineRefinery', img:'img/machines/Refinery.png', manualId:'manualRefinery', speed:1, energy:{ id:'itemElectricity', count:420e3 } },
                {	id:'recipeRefinery',	    type:'recipe',	                                        time:8, outputs:[{ id:'machineRefinery', count:1 }], inputs:[{ id:'itemCopperPlate', count:15 },{ id:'itemIronPlate', count:40 },{ id:'itemSteel', count:15 },{ id:'itemBrick', count:10 }] },
                {	id:'manualRefinery',	    type:'manual',	                                        recipeId:'recipeRefinery' },
                //---
                {	id:'machineRocketSilo',     type:'machine',	                                        label:'machineRocketSilo', img:'img/machines/RocketSilo.png', manualId:'manualRocketSilo', speed:1, energy:{ id:'itemElectricity', count:4e6 } },
                {	id:'recipeRocketSilo',	    type:'recipe',	                                        time:30, outputs:[{ id:'machineRocketSilo', count:1 }], inputs:[{ id:'itemConcrete', count:1e3 },{ id:'itemEngine2', count:200 },{ id:'itemIronPlate', count:100 },{ id:'itemCircuit3', count:200 },{ id:'itemSteel', count:1e3 }] },
                {	id:'manualRocketSilo',	    type:'manual',	                                        recipeId:'recipeRocketSilo' },
                //---
                {	id:'storerChest',	        type:'storer',	                                        label:'storerChest', img:'img/storers/Chest.png', manualId:'manualChest' },
                {	id:'recipeChest',	        type:'recipe',	                                        time:1, outputs:[{ id:'storerChest', count:1 }], inputs:[{ id:'itemIronPlate', count:8 }] },
                {	id:'manualChest',	        type:'manual',	                                        recipeId:'recipeChest' },
                //---
                {	id:'storerBarrel',          type:'storer',	                                        label:'storerBarrel', img:'img/storers/Barrel.png', manualId:'manualBarrel' },
                {	id:'recipeBarrel',          type:'recipe',	                                        time:1, outputs:[{ id:'storerBarrel', count:1 }], inputs:[{ id:'itemSteel', count:1 }] },
                {	id:'manualBarrel',          type:'manual',	                                        recipeId:'recipeBarrel' },
                //---
                {	id:'storerTank',            type:'storer',	                                        label:'storerTank', img:'img/storers/Tank.png', manualId:'manualTank' },
                {	id:'recipeTank',            type:'recipe',	                                        time:3, outputs:[{ id:'storerTank', count:1 }], inputs:[{ id:'itemIronPlate', count:20 },{ id:'itemSteel', count:5 }] },
                {	id:'manualTank',            type:'manual',	                                        recipeId:'recipeTank' },
                //---
                {	id:'storerAccumulator',     type:'storer',	                                        label:'storerAccumulator', img:'img/storers/Accumulator.png', manualId:'manualAccumulator' },
                {	id:'recipeAccumulator',     type:'recipe',	                                        time:10, outputs:[{ id:'storerAccumulator', count:1 }], inputs:[{ id:'itemBattery', count:5 },{ id:'itemIronPlate', count:2 }] },
                {	id:'manualAccumulator',     type:'manual',	                                        recipeId:'recipeAccumulator' },
            ]
        }},
    ]
}
