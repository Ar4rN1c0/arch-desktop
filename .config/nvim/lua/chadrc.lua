-- This file needs to have same structure as nvconfig.lua 
-- https://github.com/NvChad/ui/blob/v2.5/lua/nvconfig.lua

---@type ChadrcConfig
local M = {}

M.ui = {
	theme = "onedark",
  
  changed_themes = {
    onedark = {
      base_16 = {
        base00 = "#101010"
      },
      base_30 = {
        red = "#3f0000",
        white = "#e7e7e7"     
      }
    }
  }
	-- hl_override = {
	-- 	Comment = { italic = true },
	-- 	["@comment"] = { italic = true },
	-- },
}

return M
