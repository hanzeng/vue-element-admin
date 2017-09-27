<template>
    <div class="lossManagement">
        <!--工具条-->
        <el-row class="lossManagement-row">
            <el-col :span="24">
                <span>损坏类型:</span>
                <el-button type="primary">全部</el-button>
                <el-button>漏雨</el-button>
                <el-button>伞骨断裂</el-button>
                <el-button>伞打不开</el-button>
                <el-button>收不了伞</el-button>
                <el-button>还了伞还在扣费</el-button>
                <el-button>其他</el-button>
            </el-col>

            <el-col :span="24">
                <div class="block">
                    <span class="demonstration">反馈时间:</span>
                    <el-date-picker
                            v-model="value3"
                            type="datetimerange"
                            placeholder="选择时间范围">
                    </el-date-picker>
                </div>
            </el-col>

            <el-col :span="24">
                <el-form inline>
                    <el-form-item>
                        <el-input placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" >搜索</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>


        <!--列表-->
        <section>
            <el-table :data="tableData6" border style="width: 100%">
                <el-table-column prop="name" label="用户昵称"></el-table-column>
                <el-table-column prop="date" sortable label="反馈时间"></el-table-column>
                <el-table-column prop="id" label="手机号"></el-table-column>
                <el-table-column prop="amount1" label="损坏类型"></el-table-column>
                <el-table-column prop="amount2" label="内容"></el-table-column>
                <el-table-column prop="amount3" label="备注"></el-table-column>
                <el-table-column prop="amount3" label="处理情况"></el-table-column>
                <el-table-column prop="amount3" label="操作"></el-table-column>
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
    .lossManagement{
        .lossManagement-row{
            border: 1px solid #ccc;
            margin: 10px 0;
            padding: 10px;
            .el-col{
                margin-bottom: 10px;
                span{
                    display: inline-block;
                    width: 70px;
                    text-align: right;
                    margin-right: 10px;
                }
            }
            .el-form-item{
                margin-bottom: 0;
            }
        }
        .paging{
            margin: 10px 0;
        }
    }
</style>