export interface ShowAddSwitch {
	confirm: boolean;
	nowConfirm: boolean;
	nowSevere: boolean;
	noInfect: boolean;
	importedCase: boolean;
	localConfirm: boolean;
	localinfeciton: boolean;
	all: boolean;
	suspect: boolean;
	dead: boolean;
	heal: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	showHeal: boolean;
	wzz: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	nowConfirm: number;
	continueDayZeroLocalConfirm: number;
	adcode: string;
	highRiskAreaNum: number;
	dead: number;
	showRate: boolean;
	heal: number;
	provinceLocalConfirm: number;
	confirm: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number | string;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
}

export interface Total {
	showRate: boolean;
	heal: number;
	mtime: string;
	nowConfirm: number;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroConfirm: number;
	adcode: string;
	confirm: number;
	dead: number;
	showHeal: boolean;
	continueDayZeroConfirmAdd: number;
	wzz: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add:number| string;
	local_confirm_add: number;
}

export interface Total {
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroLocalConfirm: number;
	adcode: string;
	wzz: number;
	mediumRiskAreaNum: number;
	nowConfirm: number;
	dead: number;
	heal: number;
	showHeal: boolean;
	highRiskAreaNum: number;
	mtime: string;
	confirm: number;
	showRate: boolean;
	provinceLocalConfirm: number;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	today: Today;
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
	date: string;
}

export interface AreaTree {
	today: Today;
	total: Total;
	children: Children[];
	name: string;
}

export interface ChinaTotal {
	dead: number;
	nowSevere: number;
	mediumRiskAreaNum: number;
	nowConfirm: number;
	mRiskTime: string;
	heal: number;
	noInfect: number;
	localConfirmH5: number;
	mtime: string;
	highRiskAreaNum: number;
	localConfirmAdd: number;
	confirm: number;
	noInfectH5: number;
	local_acc_confirm: number;
	nowLocalWzz: number;
	deadAdd: number;
	confirmAdd: number;
	localConfirm: number;
	suspect: number;
	importedCase: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	localWzzAdd: number;
}

export interface ChinaAdd {
	noInfect: number;
	localConfirm: number;
	confirm: number;
	heal: number;
	nowConfirm: number;
	suspect: number;
	nowSevere: number;
	importedCase: number;
	noInfectH5: number;
	localConfirmH5: number;
	dead: number;
}

export interface Diseaseh5Shelf {
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
}

export interface LocalCityNCOVDataList {
	isUpdated: boolean;
	highRiskAreaNum: number;
	city: string;
	date: string;
	mtime: string;
	local_confirm_add: number;
	local_wzz_add: string;
	mediumRiskAreaNum: number;
	isSpecialCity: boolean;
	province: string;
	adcode: string;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}