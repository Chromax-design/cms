"use server"

import { VirtualDemo } from "@/data/dashboard"
import { VirtualDemoTypes } from "@/data/dashboard/types"

export const getVirtualClasses = async (): Promise<VirtualDemoTypes[]>=>{
    return VirtualDemo;
}