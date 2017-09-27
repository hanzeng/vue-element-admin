<template>
    <div class="fundsManagement">
        <!--工具条-->
        <el-row class="fundsManagement-row">
            <el-col :span="4">
                <div class="list clearfix">
                    <div><i class="fa fa-line-chart" aria-hidden="true"></i></div>
                    <div>
                        <p>累计收入</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="list clearfix">
                    <div><i class="fa fa-file-text" aria-hidden="true"></i></div>
                    <div>
                        <p>消费收入</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="list clearfix">
                    <div><i class="fa fa-align-justify" aria-hidden="true"></i></div>
                    <div>
                        <p>鞋套收入</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="list clearfix">
                    <div><i class="fa fa-jpy" aria-hidden="true"></i></div>
                    <div>
                        <p>押金收入</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="list clearfix">
                    <div><i class="fa fa-align-left" aria-hidden="true"></i></div>
                    <div>
                        <p>充值收入</p>
                        <p>1,532</p>
                    </div>
                </div>
            </el-col>
        </el-row>

        <!--列表-->
        <section>
            <el-table :data="tableData6" border style="width: 100%">
                <el-table-column prop="date" label="时间"></el-table-column>
                <el-table-column prop="id" label="伞租金"></el-table-column>
                <el-table-column prop="name" label="鞋套售卖"></el-table-column>
                <el-table-column prop="amount1" label="交押金"></el-table-column>
                <el-table-column prop="amount2" label="退押金"></el-table-column>
                <el-table-column prop="amount3" label="充值"></el-table-column>
            </el-table>
        </section>

        <!--分页-->
        <div class="block paging">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData6: [{
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                }, {
                    id: '12987123',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                }, {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                }, {
                    id: '12987125',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                }, {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }],
//                地区
                options2: [{
                    label: '江苏',
                    cities: []
                }, {
                    label: '浙江',
                    cities: []
                }],
                props: {
                    value: 'label',
                    children: 'cities'
                },
//                时间
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                value4: '',

//                分页
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
            };
        },
        methods: {
            handleItemChange(val) {
                setTimeout(function() {
                    if (val.indexOf('江苏') > -1) {
//                        this.options2[0].cities = [{
//                            label: '南京'
//                        }];
                    } else if (val.indexOf('浙江') > -1) {
//                        this.options2[1].cities = [{
//                            label: '杭州'
//                        }];
                    }
                }, 300);
            },
//            分页
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    };
</script>


<style scoped lang="scss">
    .fundsManagement{
        .fundsManagement-row{
            border: 1px solid #ccc;
            margin: 10px 0;
            padding: 10px;
            .el-col{
                padding: 10px 50px 10px 10px;
                box-sizing: border-box;
            }
            .list{
                padding: 20px;
                width: 100%;
                height: 80px;
                text-align: center;
                border: 1px solid #ccc;
                box-sizing: border-box;
                position: relative;
                div{
                    height: 100%;
                }
                div:first-child{
                    width: 58px;
                    position: absolute;
                    left: 10px;
                    top: 10px;
                    i{
                        display: block;
                        width: 58px;
                        height: 58px;
                        line-height: 58px;
                        font-size: 24px;
                        color: #fff;
                        border-radius: 50%;
                        background-color: #20a0ff;
                    }
                }
                div:last-child{
                    padding-left: 60px;
                    box-sizing: border-box;
                    p{
                        font-size: 24px;
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
        .paging{
            margin: 10px 0;
        }
    }
</style>