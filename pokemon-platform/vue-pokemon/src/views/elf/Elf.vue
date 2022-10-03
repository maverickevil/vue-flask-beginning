<template>
    <div class="table">
        <el-table :data="list" style="width: 100%" height="750px">
            <!-- 固定列 -->
            <el-table-column fixed="left" label="名称 (name)" width="170">
                <template #default="scope">
                    <span>{{ scope.row.pokemon_name }}</span>
                </template>
            </el-table-column>

            <!-- 表格动态数据 -->
            <el-table-column
                v-for="item in tableLabel"
                :key="item.prop"
                :label="item.label"
                :prop="item.prop"
                :width="item.width ? item.width : 150"
                :sortable="item.sort"
            />

            <!-- 在表格中使用图像预览 -->
            <el-table-column label="照片 (display)" width="180">
                <template #default="scope">
                    <div style="display: flex; align-items: center;">
                        <!-- scope.row获取当前行的数据 -->
                        <el-image style="width: 100px; height: 100px" :src="scope.row.file_name" alt="no picture"></el-image>
                    </div>
                </template>
            </el-table-column>

            <!-- 自定义表头 -->
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="Type to search" />
                </template>
                <template #default="scope">
                    <el-button size="small">
                        <Edit style="width: 1.5em; height: 1.5em;" />
                    </el-button>
                    <el-button size="small" type="danger">
                        <Delete style="width: 1.5em; height: 1.5em;"  />
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
/**
 * 数据来自后端flask
 */
import { 
    defineComponent, 
    getCurrentInstance, 
    onMounted, 
    ref, 
    reactive 
} from 'vue'

export default defineComponent({
    setup() {
        const { proxy } = getCurrentInstance();
        // 初始化一个数组
        const list = ref([]);

        const search = ref('');

        const tableLabel = reactive([
            {
                prop: "zukan_id",
                label: "图鉴 (id)",
                sort: true,
            },
            {
                prop: "pokemon_type_name",
                label: "属性 (attr)",
                sort: false,
            },
            {
                prop: "age",
                label: "年龄 (age)",
                sort: true,
            },
            {
                prop: "sexLabel",
                label: "性别 (sex)",
                sort: false,
            },
            {
                prop: "birth_day",
                label: "出生日期 (birth)",
                sort: true,
                width: 200,
            },
            {
                prop: "heightLabel",
                label: "身高 (height)",
                sort: true,
            },
            {
                prop: "weightLabel",
                label: "体重 (weight)",
                sort: true,
                width: 170,
            }
        ]);
        onMounted(() => {
            getElfData();
        });
        const getElfData = async() => {
            let res = await proxy.$api.getElfData();
            list.value = res.list.map((data) => {
                data.sexLabel = data.sex === '♀' ? '母 (♀)' : '公 (♂)'
                data.heightLabel = data.height + ' m'
                data.weightLabel = data.weight + ' kg'
                return data;
            })
        };
        const formInline = reactive({
            keyword: "",
        });
        return {
            list,
            tableLabel,
            formInline,
            search,
        }
    },
});
</script>

<style lang="less" scoped>
    .el-input {
        width: 200px;
    }
</style>