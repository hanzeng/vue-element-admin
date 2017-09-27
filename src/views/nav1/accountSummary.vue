<template>
    <div class="accountSummary">
        <el-row class="accountSummary-row">
            <el-col :span="6">
                <div class="list clearfix">
                    <div><i class="fa fa-user" aria-hidden="true"></i></div>
                    <div>
                        <p>总用户数</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="list">
                    <div><i class="fa fa-user-plus" aria-hidden="true"></i></div>
                    <div>
                        <p>日新增用户</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="accountSummary-row">
            <el-col :span="6">
                <div class="list clearfix">
                    <div><i class="fa fa-jpy" aria-hidden="true"></i></div>
                    <div>
                        <p>今日流入</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="list clearfix">
                    <div><i class="fa fa-file-text" aria-hidden="true"></i></div>
                    <div>
                        <p>今日订单数</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="list clearfix">
                    <div><i class="fa fa-line-chart" aria-hidden="true"></i></div>
                    <div>
                        <p>当月流入</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="list clearfix">
                    <div><i class="fa fa-bar-chart" aria-hidden="true"></i></div>
                    <div>
                        <p>当月订单数</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="accountSummary-row">
            <el-col :span="6">
                <div class="list clearfix">
                    <div><i class="fa fa-umbrella" aria-hidden="true"></i></div>
                    <div>
                        <p>累计投放雨伞</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="list clearfix">
                    <div><i class="fa fa-wrench" aria-hidden="true"></i></div>
                    <div>
                        <p>累计安装伞柜</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="list clearfix">
                    <div><i class="fa fa-align-left" aria-hidden="true"></i></div>
                    <div>
                        <p>累计投放鞋套</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="list clearfix">
                    <div><i class="fa fa-align-justify" aria-hidden="true"></i></div>
                    <div>
                        <p>累计售出鞋套</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
    .accountSummary{
        .accountSummary-row{
            margin: 10px 0;
            .el-col{
                padding: 10px 50px 10px 10px;
                box-sizing: border-box;
                min-width: 310px;
            }
            .list{
                padding: 20px;
                width: 100%;
                height: 130px;
                text-align: center;
                border: 1px solid #ccc;
                box-sizing: border-box;
                position: relative;
                div{
                    height: 100%;
                }
                div:first-child{
                    width: 88px;
                    position: absolute;
                    left: 10px;
                    top: 20px;
                    i{
                        display: block;
                        width: 88px;
                        height: 88px;
                        line-height: 88px;
                        font-size: 44px;
                        color: #fff;
                        border-radius: 50%;
                        background-color: #6da72b;
                    }
                }
                div:last-child{
                    padding-left: 90px;
                    padding-top: 20px;
                    box-sizing: border-box;
                    p{
                        font-size: 30px;
                        color: #333;
                        text-align: left;
                        margin: 0;
                    }
                    p:first-child{
                        font-size: 14px;
                        color: #999;
                    }
                }
            }
        }
    }
</style>