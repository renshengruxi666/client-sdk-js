var Constant = require('web3/lib/web3/platon/constant');
var PlatonCommon = require('web3/lib/web3/platon/common');

class ProposalContract {
    constructor() {
        this.address = Constant.CONTRACT_ADDRESS.ProposalContract; //合约地址
    }
    init(web3,cid){
        this.web3 = web3;
        this.cid = cid;
    }
    /**
    * 提交文本提案
    *@param from  发起方
    *@param privateKey  发起方私钥
    *@param value 发送金额
    *@param verifier 提交提案的验证人
    *@param githubID 提案在github上的ID
    *@param topic 提案主题
    *@param desc 提案描述
    *@param url 提案URL
    *@param endVotingBlock 提案投票截止块高
     * @returns {Promise<Object>}
    */
    submitText(params) {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.submitText;
            let param = [funcType, '0x'+params.verifier, params.githubID, params.topic, params.desc, params.url, params.endVotingBlock];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.getTransactionCount(params.from, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                const number = data.toString(16);
                PlatonCommon.sendTransaction(this.web3, params.from, params.privateKey, params.value,this.cid, number, this.address, platOnData).then(data => {
                    resolve(data)
                }).catch((error)=>{
                    reject(error);
                })
            })
        })
    }

    /**
    * 提交参数提案
    *@param from  发起方
    *@param privateKey  发起方私钥
    *@param value 发送金额
    *@param verifier 提交提案的验证人
    *@param githubID 提案在github上的ID
    *@param topic 提案主题
    *@param desc 提案描述
    *@param url 提案URL
    *@param endVotingBlock 提案投票截止块高
    *@param paramName 参数名称
    *@param currentValue 当前值
    *@param newValue 新的值
     * @returns {Promise<Object>}
    */
    submitParam(params) {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.submitParam;
            let param = [funcType, '0x'+params.verifier, params.githubID, params.topic, params.desc, params.url, params.endVotingBlock, params.paramName, params.currentValue, params.newValue];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.getTransactionCount(params.from, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                const number = data.toString(16);
                PlatonCommon.sendTransaction(this.web3, params.from, params.privateKey, params.value,this.cid, number, this.address, platOnData).then(data => {
                    resolve(data)
                }).catch((error)=>{
                    reject(error);
                })
            })
        })
    }

    /**
    * 提交升级提案
    *@param from  发起方
    *@param privateKey  发起方私钥
    *@param value 发送金额
    *@param verifier 提交提案的验证人
    *@param githubID 提案在github上的ID
    *@param topic 提案主题
    *@param desc 提案描述
    *@param url 提案URL
    *@param newVersion 升级版本
    *@param endVotingBlock 提案投票截止块高
    *@param activeBlock 生效块高
     * @returns {Promise<Object>}
    */
    submitVersion(params) {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.submitVersion;
            let param = [funcType, '0x'+params.verifier, params.githubID, params.topic, params.desc, params.url, params.newVersion, params.endVotingBlock, params.activeBlock];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.getTransactionCount(params.from, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                const number = data.toString(16);
                PlatonCommon.sendTransaction(this.web3, params.from, params.privateKey, params.value, this.cid, number, this.address, platOnData).then(data => {
                    resolve(data)
                }).catch((error)=>{
                    reject(error);
                })
            })
        })
    }

    /**
    * 给提案投票
    *@param from  发起方
    *@param privateKey  发起方私钥
    *@param value 发送金额
    *@param verifier 投票验证人
    *@param proposalID 提案ID
    *@param option 投票选项
     * @param programVersion 节点代码版本
     * @returns {Promise<Object>}
    */
    vote(params) {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.vote;
            let param = [funcType, '0x'+params.verifier, params.proposalID, params.option,params.programVersion];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.getTransactionCount(params.from, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                const number = data.toString(16);
                PlatonCommon.sendTransaction(this.web3, params.from, params.privateKey, params.value,this.cid, number, this.address, platOnData).then(data => {
                    resolve(data)
                }).catch((error)=>{
                    reject(error);
                })
            })
        })
    }

    /**
    * 版本声明
    *@param from  发起方
    *@param privateKey  发起方私钥
    *@param value 发送金额
    *@param activeNode 声明的节点，只能是验证人/候选人
    *@param version 声明的版本
     * @returns {Promise<Object>}
    */

    declareVersion(params) {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.declareVersion;
            let param = [funcType, '0x'+params.activeNode, params.version];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.getTransactionCount(params.from, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                const number = data.toString(16);
                PlatonCommon.sendTransaction(this.web3, params.from, params.privateKey, params.value,this.cid, number, this.address, platOnData).then(data => {
                    resolve(data)
                }).catch((error)=>{
                    reject(error);
                })
            })
        })
    }

    /**
     * 查询提案
     * @param proposalID 提案ID
     * @returns {Promise<Object>}
     */

    getProposal(params) {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.getProposal
            let param = [funcType, params.proposalID];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.call({
                from: this.address,
                to: this.address,
                data: platOnData
            }, (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                const decodeObj = PlatonCommon.decodePlatONCall(result);
                const obj = PlatonCommon.handleResult(decodeObj);
                resolve(obj);
            });
        })
    }

    /**
     * 查询提案列表
     * @returns {Promise<Object>}
     */

    listProposal() {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.listProposal
            let param = [funcType];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.call({
                from: this.address,
                to: this.address,
                data: platOnData
            }, (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                const decodeObj = PlatonCommon.decodePlatONCall(result);
                const obj = PlatonCommon.handleResult(decodeObj);
                resolve(obj);
            });
        });
    }
    /**
     * 查询提案结果
     * @param proposalID 提案ID
     * @returns {Promise<Object>}
     */
    getTallyResult(params) {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.getTallyResult
            let param = [funcType,params.proposalID];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.call({
                from: this.address,
                to: this.address,
                data: platOnData
            }, (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                const decodeObj = PlatonCommon.decodePlatONCall(result);
                const obj = PlatonCommon.handleResult(decodeObj);
                resolve(obj);
            });
        });
    }
    /**
     * 查询节点的链生效版本
     * @returns {Promise<Object>}
     */
    getActiveVersion() {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.getActiveVersion
            let param = [funcType];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.call({
                from: this.address,
                to: this.address,
                data: platOnData
            }, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                const decodeObj = PlatonCommon.decodePlatONCall(result);
                const obj = PlatonCommon.handleResult(decodeObj);
                resolve(obj);
            });
        });
    }
    /**
     * 查询节点代码版本
     * @returns {Promise<Object>}
     */
    getProgramVersion() {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.getProgramVersion
            let param = [funcType];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.call({
                from: this.address,
                to: this.address,
                data: platOnData
            }, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                const decodeObj = PlatonCommon.decodePlatONCall(result);
                const obj = PlatonCommon.handleResult(decodeObj);
                resolve(obj);
            });
        });
    }
    /**
     * 查询可治理参数列表
     * @returns {Promise<Object>}
     */
    listParam() {
        return new Promise((resolve, reject) => {
            const funcType = Constant.FUNCTYPE.listParam
            let param = [funcType];
            const platOnData = PlatonCommon.getPlatONData(param);
            this.web3.platon.call({
                from: this.address,
                to: this.address,
                data: platOnData
            }, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                const decodeObj = PlatonCommon.decodePlatONCall(result);
                const obj = PlatonCommon.handleResult(decodeObj);
                resolve(obj);
            });
        });
    }
}

module.exports = new ProposalContract;
